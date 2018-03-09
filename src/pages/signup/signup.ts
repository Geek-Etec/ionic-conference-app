import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, LoadingController, Loading } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';

import { ThinkEventService } from '../../providers/thinkEvent-service';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: UserOptions = { 
    userName: '', 
    name: '',
    surname: '',
    emailAddress: '',
    isActive: true,
    roles: [
      "User"
    ],
    password: '',
    token: '' 
  };
  submitted = false;
  loading: Loading;

  constructor(private thinkEventService: ThinkEventService,
              public navCtrl: NavController, 
              private loadingCtrl: LoadingController,
              public userData: UserData) {}

  onSignup(form: NgForm) {
    this.showLoading();

    this.submitted = true;

    if (form.valid) {
      try{
        this.thinkEventService.getToken().then((token: string) => {
          this.signup.token = token;
          this.thinkEventService.userCreate(this.signup).then(() => {
            this.userData.signup(this.signup.userName);
            this.loading.dismiss();
            this.navCtrl.push(TabsPage);
          });  
        });  
      } catch (ex) {
        this.loading.dismiss();
        console.log(ex);
      }
    }
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}