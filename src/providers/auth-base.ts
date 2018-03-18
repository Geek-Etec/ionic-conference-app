import { LoadingController, AlertController, Loading } from 'ionic-angular';

import { Injectable } from '@angular/core';

import { ILoadingUtils } from '../interfaces/loading-utils';
import { ICryptoUtils } from '../interfaces/crypto-utils';

import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthBase implements ILoadingUtils, ICryptoUtils {
    constructor(_loadingCtrl: LoadingController, _alertCtrl: AlertController) {
        this.loadingCtrl = _loadingCtrl;
        this.alertCtrl = _alertCtrl;
    }

    public encrypt(type: string, text: string, key: string): string {
        let options: any = { mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 };
        key = CryptoJS.enc.Utf8.parse(key);
        let json = CryptoJS[type].encrypt(text, key.toString().toUpperCase(), options);
        return json.toString();
    }

    public decrypt(type: string, ciphertext: string, key: string) {
        let bytes = CryptoJS[type].decrypt(ciphertext, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    loading: Loading;
    loadingCtrl: LoadingController;
    alertCtrl: AlertController;

    public showLoading(): void {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...',
            dismissOnPageChange: true
        });

        this.loading.present();
    }

    show(title: string, text: string) {
        this.loading.dismiss();
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }
}