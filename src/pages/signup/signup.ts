import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';

import { ThinkEventService } from '../../providers/thinkEvent-service';

import { AuthBase } from '../../providers/auth-base';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage extends AuthBase {
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

  constructor(private thinkEventService: ThinkEventService,
              public navCtrl: NavController, 
              loadingCtrl: LoadingController,
              alertCtrl: AlertController,
              public userData: UserData) {
    super(loadingCtrl, alertCtrl);
  }

  onSignup(form: NgForm) {
    this.showLoading();

    this.submitted = true;

    if (form.valid) {
      try{
        this.thinkEventService.getToken().then((token: string) => {
          this.signup.token = token;
          this.signup.password = this.encrypt("AES", this.signup.password, "scrt-key-" + this.signup.userName);
          this.thinkEventService.userCreate(this.signup).then(() => {
            this.userData.signup(this.signup.userName);
            this.loading.dismiss();
            this.navCtrl.push(TabsPage);
          }).catch((res: any) => {
            this.loading.dismiss();
            this.show(res.error.message, res.error.details);    
          });  
        });  
      } catch (ex) {
        this.loading.dismiss();
        console.log(ex);
      }
    }
  }
}