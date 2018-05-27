import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, AlertController, LoadingController, Platform } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';

import { ThinkEventService } from '../../providers/thinkEvent-service';

import { AuthBase } from '../../providers/auth-base';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage extends AuthBase {
  login: UserOptions = { userName: '', password: '' };
  submitted = false;  

  constructor(private thinkEventService: ThinkEventService,
              loadingCtrl: LoadingController,
              alertCtrl: AlertController,
              public navCtrl: NavController, 
              public userData: UserData,
              private platform: Platform) { 
    super(loadingCtrl, alertCtrl);

    // Exemplo de criptografia usada na senha
    // let ciphertext = this.encrypt("AES", "my message", "secret key 123");
    // console.log(ciphertext);
    // console.log(this.decrypt("AES", ciphertext, "secret key 123"));
  }

  onLogin(form: NgForm) {
    this.showLoading();

    this.submitted = true;

    if (form.valid) {
      try {       
        let userDTO: UserOptions = { userName: '', password: '' };        

        if (this.platform.is('android'))
          userDTO.password = this.login.password;
        else
          userDTO.password = this.encrypt("AES", this.login.password, "scrt-key-" + this.login.userName.toLowerCase());

        userDTO.userName = this.login.userName.toLowerCase();
                
        this.thinkEventService.login(userDTO).then(() => {
          this.userData.login(this.login.userName.toLowerCase());
          this.loading.dismiss();
          this.navCtrl.push(TabsPage);    
        })
        .catch((res: any) => {
          this.loading.dismiss();
          this.show(res.error.message, res.error.details);          
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
