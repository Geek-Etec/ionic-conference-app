import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, LoadingController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';

import { ThinkEventService } from '../../providers/thinkEvent-service';

import { LoadingUtils } from '../../utils/loading';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage extends LoadingUtils {
  login: UserOptions = { userName: '', password: '' };
  submitted = false;

  constructor(private thinkEventService: ThinkEventService,
              loadingCtrl: LoadingController,
              public navCtrl: NavController, 
              public userData: UserData) { 
    super(loadingCtrl);
  }

  onLogin(form: NgForm) {
    this.showLoading();

    this.submitted = true;

    if (form.valid) {
      try {
        this.thinkEventService.login(this.login).then(() => {
          this.userData.login(this.login.userName);
          this.loading.dismiss();
          this.navCtrl.push(TabsPage);    
        });
      } catch (ex) {
        this.loading.dismiss();
        console.log(ex);
      }
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
