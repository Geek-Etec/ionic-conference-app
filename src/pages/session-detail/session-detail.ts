import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;

  constructor(
    public dataProvider: ConferenceData,
    public navParams: NavParams
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load(false, true, this.navParams.data.day).then((data: any) => {
      if (
        data &&
        data.items &&
        data.items &&
        data.items.groups
      ) {
        for (const group of data.items.groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === this.navParams.data.sessionId) {
                this.session = session;
                break;
              }
            }
          }
        }
      }
    });
  }
}
