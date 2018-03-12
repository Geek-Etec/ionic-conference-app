import { LoadingController, Loading } from 'ionic-angular';

import { Injectable } from '@angular/core';

@Injectable() 
export class LoadingUtils {
    loading: Loading;

    constructor(private loadingCtrl: LoadingController) {

    }

    public showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    }
}