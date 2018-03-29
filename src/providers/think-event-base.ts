import { LoadingController, AlertController, Loading } from 'ionic-angular';

import { Injectable } from '@angular/core';

import { ILoadingUtils } from '../interfaces/loading-utils';

@Injectable()
export class ThinkEventBase implements ILoadingUtils {
    constructor(_loadingCtrl: LoadingController, _alertCtrl: AlertController) {
        this.loadingCtrl = _loadingCtrl;
        this.alertCtrl = _alertCtrl;
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