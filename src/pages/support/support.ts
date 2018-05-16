import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertController, NavController, ToastController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { ThinkEventService } from '../../providers/thinkEvent-service';

@Component({
  selector: 'page-user',
  templateUrl: 'support.html'
})
export class SupportPage {
  submitted: boolean = false;
  supportMessage: string;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private userData: UserData,
    private thinkEventService: ThinkEventService
  ) {

  }

  ionViewDidEnter() {

  }

  submit(form: NgForm) {
    //Verifica se o usuário está logado
    this.userData.get().then((user: any) => {
      if (user === undefined || user === null){
        let error = this.toastCtrl.create({
          message: 'Para solicitar um suporte é necessário criar uma conta de usuário.',
          duration: 3000
        });
        error.present();
      } else {
        this.submitted = true;

        if (form.valid) {    
          this.thinkEventService.sendEmail(          {
            fromEmail: "'" + user.fullname + "' <" + user.emailAddress + ">",
            toEmail : "geeketec@hotmail.com",
            subject : "Aplicativo",
            message : this.supportMessage,
            isImportant : "true"          
          });

          this.supportMessage = '';
          this.submitted = false;
    
          let toast = this.toastCtrl.create({
            message: 'Sua solicitação de suporte foi enviada.',
            duration: 3000
          });
          toast.present();
        }          
      }
    });
  }

  // If the user enters text in the support question and then navigates
  // without submitting first, ask if they meant to leave the page
  ionViewCanLeave(): boolean | Promise<boolean> {
    // If the support message is empty we should just navigate
    if (!this.supportMessage || this.supportMessage.trim().length === 0) {
      return true;
    }

    return new Promise((resolve: any, reject: any) => {
      let alert = this.alertCtrl.create({
        title: 'Deixar esta página?',
        message: 'Tem certeza de que deseja sair desta página? Sua mensagem de suporte não será enviada.'
      });
      alert.addButton({ text: 'Ficar', handler: reject });
      alert.addButton({ text: 'Sair', role: 'cancel', handler: resolve });

      alert.present();
    });
  }
}
