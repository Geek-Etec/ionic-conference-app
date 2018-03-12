import { LoadingController, Loading } from 'ionic-angular';

import { Injectable } from '@angular/core';

import { ILoadingUtils } from '../interfaces/loading-utils';
import { ICryptoUtils } from '../interfaces/crypto-utils';

import * as CryptoJS from 'crypto-js';

@Injectable() 
export class LoginBase implements ILoadingUtils, ICryptoUtils {    
    constructor(_loadingCtrl: LoadingController) {
        this.loadingCtrl = _loadingCtrl;        
    }

    public encrypt(type: string, message: string, key: string): string {
        return CryptoJS[type].encrypt(message, key);
    }

    public decrypt(type: string, ciphertext: string, key: string) {
        let bytes  = CryptoJS[type].decrypt(ciphertext, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
    
    loading: Loading;
    loadingCtrl: LoadingController;

    public showLoading(): void {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...',
            dismissOnPageChange: true
        });

        this.loading.present();
    }
}