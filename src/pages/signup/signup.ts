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

  onSignup(form: NgForm, force: boolean = false) {
    this.showLoading();

    this.submitted = true;

    if (form.valid) {
      try{
        this.thinkEventService.getToken(force).then((token: string) => {
          this.userData.setToken(token).then(() => {
            let password: string = this.encrypt("AES", this.signup.password, "scrt-key-" + this.signup.userName);
            this.thinkEventService.userCreate({
              userName: this.signup.userName,
              name: this.signup.name,
              surname: this.signup.surname,
              emailAddress: this.signup.emailAddress,
              password: password,
              fullname: this.signup.name + ' ' + this.signup.surname,
              token: token
            }).then(() => {
              this.userData.set({
                userName: this.signup.userName,
                name: this.signup.name,
                surname: this.signup.surname,
                emailAddress: this.signup.emailAddress
              });
              this.userData.signup(this.signup.userName);
              this.loading.dismiss();
              this.navCtrl.push(TabsPage);
            }).catch((res: any) => {
              this.loading.dismiss();

              if (res.unAuthorizedRequest)
                this.onSignup(form, true);
              else
                this.show(res.error.message, res.error.details);    
            });  
          });
        });  
      } catch (ex) {
        this.loading.dismiss();
        console.log(ex);
      }
    }
  }
}