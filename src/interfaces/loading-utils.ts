import { LoadingController, Loading } from 'ionic-angular';

export interface ILoadingUtils {
    loading: Loading;
    loadingCtrl: LoadingController;

    showLoading(): void;
}