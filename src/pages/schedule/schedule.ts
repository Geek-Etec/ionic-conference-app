import { Component, ViewChild } from '@angular/core';

import {
  AlertController,
  App,
  FabContainer,
  ItemSliding,
  List,
  ModalController,
  NavController,
  ToastController,
  LoadingController,
  Refresher,
  Platform,
  NavParams
} from 'ionic-angular';

/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

import { SessionDetailPage } from '../session-detail/session-detail';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';

import { ThinkEventBase } from '../../providers/think-event-base';

import { SocialSharing } from '@ionic-native/social-sharing';

import { FilePath } from '@ionic-native/file-path';
import { AppAvailability } from '@ionic-native/app-availability';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage extends ThinkEventBase {
  // the list is a child of the schedule page
  // @ViewChild('scheduleList') gets a reference to the list
  // with the variable #scheduleList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('scheduleList', { read: List }) scheduleList: List;

  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  isAndroid: boolean = this.platform.is('android');

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public confData: ConferenceData,
    public user: UserData,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    private filePath: FilePath,
    private appAvailability: AppAvailability,
    private platform: Platform
  ) {
    super(loadingCtrl, alertCtrl);

  }

  ionViewDidLoad() {
    this.app.setTitle('Programação');
    this.updateSchedule();
  }

  updateSchedule() {
    // Close any open sliding items when the schedule updates
    this.scheduleList && this.scheduleList.closeSlidingItems();

    this.showLoading();

    this.confData.getTimelineDay(this.navParams.data.day, this.queryText, this.excludeTracks, this.segment).then((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
      this.confDate = data.date;
      this.loading.dismiss();
    }).catch(() => {
      this.loading.dismiss();
    });
  }

  presentFilter() {
    let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
        this.updateSchedule();
      }
    });

  }

  goToSessionDetail(sessionData: any) {
    // go to the session detail page
    // and pass in the session data

    this.navCtrl.push(SessionDetailPage, { sessionId: sessionData.id, name: sessionData.name, day: this.navParams.data.day });
  }

  addFavorite(slidingItem: ItemSliding, sessionData: any) {

    if (this.user.hasFavorite(sessionData.name)) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      this.removeFavorite(slidingItem, sessionData, 'Favorito já adicionado');
    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.name);

      // create an alert instance
      let alert = this.alertCtrl.create({
        title: 'Favorito Adicionado',
        buttons: [{
          text: 'OK',
          handler: () => {
            // close the sliding item
            slidingItem.close();
          }
        }]
      });
      // now present the alert on top of all other content
      alert.present();
    }

  }

  removeFavorite(slidingItem: ItemSliding, sessionData: any, title: string) {
    let alert = this.alertCtrl.create({
      title: title,
      message: 'Gostaria de remover esta sessão dos seus favoritos?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remover',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateSchedule();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    alert.present();
  }

  openSocial(network: string, fab: FabContainer) {
    let msg: string = "GEEK ETEC 2018 nos dias 26 e 27 de Maio, no IBC de Pres. Prudente - Post via App do #GeekEtec";

    let path: string = 'file:///android_asset/www/assets/img/ica-slidebox-img-1.png';
    let app;

    this.filePath.resolveNativePath(path)
      .then((filePath: string) => {
        this.convertToBase64(filePath, 'image/png').then(
          data => {
            let base64File: string = data.toString();

            if (network === "Facebook") {
              if (this.platform.is('android')) {
                app = 'com.facebook.android';

                this.appAvailability.check(app)
                  .then(
                    (yes: boolean) => {
                      if (yes)
                        console.log(app + ' is available');

                      this.message(`Postando para ${network}`, fab);

                      this.socialSharing.shareViaFacebook(msg, base64File, null);
                    },
                    (no: string) => {
                      console.log(app + ' is NOT available')

                      if (no === "")
                        this.message(`Ooops... Você não tem o ${network} instalado, faça a instalação e tente novamente.`, fab);
                    });
              }
            }

            if (network === "Twitter") {
              if (this.platform.is('android')) {
                app = 'com.twitter.android';

                this.appAvailability.check(app)
                  .then(
                    (yes: boolean) => {
                      if (yes)
                        console.log(app + ' is available');

                      this.message(`Postando para ${network}`, fab);

                      this.socialSharing.shareViaTwitter(msg, base64File, null);
                    },
                    (no: string) => {
                      console.log(app + ' is NOT available')

                      if (no === "")
                        this.message(`Ooops... Você não tem o ${network} instalado, faça a instalação e tente novamente.`, fab);
                    });
              }
            }

            if (network === "Instagram") {
              if (this.platform.is('android')) {
                app = 'com.instagram.android';

                this.appAvailability.check(app)
                  .then(
                    (yes: boolean) => {
                      if (yes)
                        console.log(app + ' is available');

                      this.message(`Postando para ${network}`, fab);

                      this.socialSharing.shareViaInstagram(msg, base64File);
                    },
                    (no: string) => {
                      console.log(app + ' is NOT available')

                      if (no === "")
                        this.message(`Ooops... Você não tem o ${network} instalado, faça a instalação e tente novamente.`, fab);
                    });
              }
            }

            if (network === "Whatsapp") {
              if (this.platform.is('android')) {
                app = 'com.whatsapp';

                this.appAvailability.check(app)
                  .then(
                    () => {
                      console.log(app + ' is available')

                      this.message(`Postando para ${network}`, fab);

                      this.socialSharing.shareViaWhatsApp(msg, base64File, null);
                    },
                    (no: string) => {
                      console.log(app + ' is NOT available')

                      if (no === "")
                        this.message(`Ooops... Você não tem o ${network} instalado, faça a instalação e tente novamente.`, fab);
                    });
              }
            }
          }
        );
      })
      .catch(err => console.log(err));
  }

  message(msg: string, fab: FabContainer) {
    let loading = this.loadingCtrl.create({
      content: msg,
      duration: 5000
    });
    loading.onWillDismiss(() => {
      fab.close();
    });
    loading.present();
  }

  convertToBase64(url, outputFormat) {
    return new Promise((resolve) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS'),
          ctx = canvas.getContext('2d'),
          dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        canvas = null;
        resolve(dataURL);
      };
      img.src = url;
    });
  }

  doRefresh(refresher: Refresher) {
    this.confData.getTimelineDay(this.navParams.data.day, this.queryText, this.excludeTracks, this.segment).then((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
      this.confDate = data.date;

      // simulate a network request that would take longer
      // than just pulling from out local json file
      setTimeout(() => {
        refresher.complete();

        const toast = this.toastCtrl.create({
          message: 'As sessões foram atualizadas.',
          duration: 3000
        });
        toast.present();
      }, 1000);
    });
  }
}
