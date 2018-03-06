import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';

import { ThinkEventService } from '../../providers/thinkEvent-service';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(private thinkEventService: ThinkEventService,
              public navCtrl: NavController, 
              public userData: UserData) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.thinkEventService.getToken().then((token: string) => {
        console.log(token);
        this.userData.signup(this.signup.username);
        this.navCtrl.push(TabsPage);  
      });
    }
  }
}
