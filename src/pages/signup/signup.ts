import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, LoadingController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';

import { ThinkEventService } from '../../providers/thinkEvent-service';

import { LoadingUtils } from '../../utils/loading';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage extends LoadingUtils {
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
              public userData: UserData) {
    super(loadingCtrl);
  }

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
}