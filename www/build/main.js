webpackJsonp([0],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sobre</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="about-header">\n    <img src="assets/img/ionic-logo-white.png" alt="Geek Etec">\n  </div>\n  <div padding class="about-info">\n    <h4>Geek Etec</h4>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label>Datas</ion-label>\n        <ion-label>26/05/2018</ion-label>\n          <ion-label>27/05/2018</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pin" item-start></ion-icon>\n        <ion-label>Local</ion-label>\n        <ion-select>\n          <ion-option value="madison" selected>IBC, Presidente Prudente, SP</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <p>\n      O Geek ETEC é um evento para os amantes e apreciadores da cultura geek.\n    </p>\n    <p>\n      Neste ano o tema é Harry Potter e serão dois dias com vários concursos, campeonatos, apresentações, oficinas e shows com diversos elementos da cultura geek.\n    </p>      \n    <p>\n      Confira a programação completa.\n    </p>      \n    <p>\n      Lembrando que a entrada é gratuita.\n    </p>  \n    <p>    \n      Estamos te esperando! 😉\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_conference_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getMap().subscribe(function (mapData) {
            var mapEle = _this.mapElement.nativeElement;
            var map = new google.maps.Map(mapEle, {
                center: mapData.find(function (d) { return d.center; }),
                zoom: 20,
                mapTypeId: 'satellite'
            });
            mapData.forEach(function (markerData) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<h5>" + markerData.name + "</h5>"
                });
                var marker = new google.maps.Marker({
                    position: markerData,
                    map: map,
                    title: markerData.name
                });
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
            google.maps.event.addListenerOnce(map, 'idle', function () {
                mapEle.classList.add('show-map');
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Parceiros</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="map-page">\n  <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DbProvider = (function () {
    function DbProvider(storage) {
        this.storage = storage;
        this.storage.length().then(function (length) {
            console.log(length);
        });
    }
    DbProvider.prototype.get = function (key) {
        return this.storage.get(key);
    };
    DbProvider.prototype.set = function (key, value) {
        return this.storage.set(key, value);
    };
    DbProvider.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    DbProvider.prototype.like = function (key) {
        var _this = this;
        return new Promise(function (resolve) {
            var retorno = [];
            _this.storage.keys().then(function (keys) {
                var count = 0;
                keys.forEach(function (keyData) {
                    if (keyData.indexOf(key, 0) !== -1) {
                        _this.storage.get(keyData).then(function (res) {
                            if (Array.isArray(res)) {
                                res.forEach(function (resItem) {
                                    retorno.push(resItem);
                                });
                                count++;
                                if (count >= keys.length)
                                    resolve(retorno);
                            }
                            else {
                                retorno.push(res);
                                count++;
                                if (count >= keys.length)
                                    resolve(retorno);
                            }
                        });
                    }
                    else {
                        count++;
                        if (count >= keys.length)
                            resolve(retorno);
                    }
                });
            });
        });
    };
    DbProvider.prototype.likeRemove = function (key) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.keys().then(function (keys) {
                var count = 0;
                keys.forEach(function (keyData) {
                    if (keyData.indexOf(key, 0) !== -1) {
                        _this.remove(keyData);
                        count++;
                        if (count >= keys.length)
                            resolve(true);
                    }
                    else {
                        count++;
                        if (count >= keys.length)
                            resolve(true);
                    }
                });
            });
        });
    };
    DbProvider.prototype.count = function (key) {
        return this.storage.get(key).then(function (res) {
            try {
                return res.length || 0;
            }
            catch (error) {
                console.log(error);
                return 0;
            }
        });
    };
    DbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], DbProvider);
    return DbProvider;
}());

//# sourceMappingURL=db-provider.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_think_event_base__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_availability__ = __webpack_require__(116);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';







var EventPage = (function (_super) {
    __extends(EventPage, _super);
    function EventPage(alertCtrl, loadingCtrl, app, modalCtrl, navCtrl, toastCtrl, confData, user, socialSharing, filePath, appAvailability, platform) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.app = app;
        _this.modalCtrl = modalCtrl;
        _this.navCtrl = navCtrl;
        _this.toastCtrl = toastCtrl;
        _this.confData = confData;
        _this.user = user;
        _this.socialSharing = socialSharing;
        _this.filePath = filePath;
        _this.appAvailability = appAvailability;
        _this.platform = platform;
        _this.days = [];
        _this.queryText = '';
        _this.segment = 'all';
        _this.excludeTracks = [];
        _this.shownDays = 0;
        _this.groups = [];
        _this.isAndroid = _this.platform.is('android');
        return _this;
    }
    EventPage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Dias de Evento');
        this.updateEvent();
    };
    EventPage.prototype.updateEvent = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        this.eventList && this.eventList.closeSlidingItems();
        this.showLoading();
        this.confData.getTimeline(this.queryText, this.excludeTracks, this.segment).then(function (data) {
            for (var index = 0; index < data.length; index++) {
                _this.days.push(data[index]);
                _this.shownDays++;
            }
            _this.loading.dismiss();
        }).catch(function () {
            _this.loading.dismiss();
        });
    };
    EventPage.prototype.goToEventDetail = function (day) {
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__schedule_schedule__["a" /* SchedulePage */], { day: day });
    };
    EventPage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.user.hasFavorite(sessionData.name)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(slidingItem, sessionData, 'Favorito já adicionado');
        }
        else {
            // remember this session as a user favorite
            this.user.addFavorite(sessionData.name);
            // create an alert instance
            var alert_1 = this.alertCtrl.create({
                title: 'Favorito Adicionado',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert_1.present();
        }
    };
    EventPage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Gostaria de remover este dia dos seus favoritos?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                },
                {
                    text: 'Remover',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.user.removeFavorite(sessionData.name);
                        _this.updateEvent();
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    EventPage.prototype.openSocial = function (network, fab) {
        var _this = this;
        var msg = "GEEK ETEC 2018 nos dias 26 e 27 de Maio, no IBC de Pres. Prudente - Post via App do #GeekEtec";
        var path = 'file:///android_asset/www/assets/img/ica-slidebox-img-1.png';
        var app;
        this.filePath.resolveNativePath(path)
            .then(function (filePath) {
            _this.convertToBase64(filePath, 'image/png').then(function (data) {
                var base64File = data.toString();
                if (network === "Facebook") {
                    if (_this.platform.is('android')) {
                        app = 'com.facebook.android';
                        _this.appAvailability.check(app)
                            .then(function (yes) {
                            if (yes)
                                console.log(app + ' is available');
                            _this.message("Postando para " + network, fab);
                            _this.socialSharing.shareViaFacebook(msg, base64File, null);
                        }, function (no) {
                            console.log(app + ' is NOT available');
                            if (no === "")
                                _this.message("Ooops... Voc\u00EA n\u00E3o tem o " + network + " instalado, fa\u00E7a a instala\u00E7\u00E3o e tente novamente.", fab);
                        });
                    }
                }
                if (network === "Twitter") {
                    if (_this.platform.is('android')) {
                        app = 'com.twitter.android';
                        _this.appAvailability.check(app)
                            .then(function (yes) {
                            if (yes)
                                console.log(app + ' is available');
                            _this.message("Postando para " + network, fab);
                            _this.socialSharing.shareViaTwitter(msg, base64File, null);
                        }, function (no) {
                            console.log(app + ' is NOT available');
                            if (no === "")
                                _this.message("Ooops... Voc\u00EA n\u00E3o tem o " + network + " instalado, fa\u00E7a a instala\u00E7\u00E3o e tente novamente.", fab);
                        });
                    }
                }
                if (network === "Instagram") {
                    if (_this.platform.is('android')) {
                        app = 'com.instagram.android';
                        _this.appAvailability.check(app)
                            .then(function (yes) {
                            if (yes)
                                console.log(app + ' is available');
                            _this.message("Postando para " + network, fab);
                            _this.socialSharing.shareViaInstagram(msg, base64File);
                        }, function (no) {
                            console.log(app + ' is NOT available');
                            if (no === "")
                                _this.message("Ooops... Voc\u00EA n\u00E3o tem o " + network + " instalado, fa\u00E7a a instala\u00E7\u00E3o e tente novamente.", fab);
                        });
                    }
                }
                if (network === "Whatsapp") {
                    if (_this.platform.is('android')) {
                        app = 'com.whatsapp';
                        _this.appAvailability.check(app)
                            .then(function () {
                            console.log(app + ' is available');
                            _this.message("Postando para " + network, fab);
                            _this.socialSharing.shareViaWhatsApp(msg, base64File, null);
                        }, function (no) {
                            console.log(app + ' is NOT available');
                            if (no === "")
                                _this.message("Ooops... Voc\u00EA n\u00E3o tem o " + network + " instalado, fa\u00E7a a instala\u00E7\u00E3o e tente novamente.", fab);
                        });
                    }
                }
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    EventPage.prototype.message = function (msg, fab) {
        var loading = this.loadingCtrl.create({
            content: msg,
            duration: 5000
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    EventPage.prototype.convertToBase64 = function (url, outputFormat) {
        return new Promise(function (resolve) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var canvas = document.createElement('CANVAS'), ctx = canvas.getContext('2d'), dataURL;
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                canvas = null;
                resolve(dataURL);
            };
            img.src = url;
        });
    };
    EventPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.confData.getTimeline(this.queryText, this.excludeTracks, this.segment).then(function (data) {
            if (data.length > 0)
                _this.days = [];
            for (var index = 0; index < data.length; index++) {
                _this.days.push(data[index]);
                _this.shownDays++;
            }
            // simulate a network request that would take longer
            // than just pulling from out local json file
            setTimeout(function () {
                refresher.complete();
                var toast = _this.toastCtrl.create({
                    message: 'os dias de evento foram atualizados.',
                    duration: 3000
                });
                toast.present();
            }, 1000);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('eventList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */])
    ], EventPage.prototype, "eventList", void 0);
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/event/event.html"*/'<ion-header>\n    <ion-navbar no-border-bottom>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>     \n      <ion-title>Selecione um Dia</ion-title> \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n    <ion-list #EventList [hidden]="shownDays === 0">\n      <ion-item-group *ngFor="let day of days">    \n        <ion-item-sliding>  \n          <button ion-item (click)="goToEventDetail(day)">\n            <h3>{{day.date}}</h3>\n            <p>\n                Geek Etec 2018 no IBC\n            </p>            \n          </button>\n          <ion-item-options>\n            <button ion-button color="favorite" (click)="addFavorite(slidingItem, session)" *ngIf="segment === \'all\'">\n              Favorito\n            </button>\n            <button ion-button color="danger" (click)="removeFavorite(slidingItem, session, \'Remover Favorito\')" *ngIf="segment === \'favorites\'">\n              Remover\n            </button>\n          </ion-item-options>  \n        </ion-item-sliding>  \n      </ion-item-group>  \n    </ion-list>\n  \n    <ion-list-header [hidden]="shownDays > 0">\n      Nenhum evento encontrado\n    </ion-list-header>\n  \n    <ion-fab [hidden]="!isAndroid" bottom right #fab>\n      <button ion-fab><ion-icon name="share"></ion-icon></button>\n      <ion-fab-list side="top">\n        <button ion-fab color="whatsapp" (click)="openSocial(\'Whatsapp\', fab)"><ion-icon name="logo-whatsapp"></ion-icon></button>\n        <button ion-fab color="instagram" (click)="openSocial(\'Instagram\', fab)"><ion-icon name="logo-instagram"></ion-icon></button>\n        <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n        <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n  </ion-content>'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/event/event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_availability__["a" /* AppAvailability */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], EventPage);
    return EventPage;
}(__WEBPACK_IMPORTED_MODULE_5__providers_think_event_base__["a" /* ThinkEventBase */]));

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionDetailPage = (function () {
    function SessionDetailPage(dataProvider, navParams) {
        this.dataProvider = dataProvider;
        this.navParams = navParams;
    }
    SessionDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load(false, true, this.navParams.data.day).then(function (data) {
            if (data &&
                data.items &&
                data.items &&
                data.items.groups) {
                for (var _i = 0, _a = data.items.groups; _i < _a.length; _i++) {
                    var group = _a[_i];
                    if (group && group.sessions) {
                        for (var _b = 0, _c = group.sessions; _b < _c.length; _b++) {
                            var session = _c[_b];
                            if (session && session.id === _this.navParams.data.sessionId) {
                                _this.session = session;
                                break;
                            }
                        }
                    }
                }
            }
        });
    };
    SessionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-session-detail',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/session-detail/session-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="session">{{session.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="session">\n    <h1>{{session.name}}</h1>\n    <h4 *ngFor="let speaker of session?.speakers">\n    {{speaker.name}}\n  </h4>\n    <p>\n      {{session.timeStart}} - {{session.timeEnd}}\n    </p>\n    <p>{{session.location}}</p>\n    <p>{{session.description}}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/session-detail/session-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SessionDetailPage);
    return SessionDetailPage;
}());

//# sourceMappingURL=session-detail.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_think_event_base__ = __webpack_require__(63);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







;
var SpeakerListPage = (function (_super) {
    __extends(SpeakerListPage, _super);
    function SpeakerListPage(alertCtrl, loadingCtrl, actionSheetCtrl, navCtrl, confData, config, inAppBrowser, toastCtrl) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.navCtrl = navCtrl;
        _this.confData = confData;
        _this.config = config;
        _this.inAppBrowser = inAppBrowser;
        _this.toastCtrl = toastCtrl;
        _this.speakers = [];
        return _this;
    }
    SpeakerListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getSpeakers().subscribe(function (speakers) {
            _this.speakers = speakers;
        });
    };
    SpeakerListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: session.id });
    };
    SpeakerListPage.prototype.goToSpeakerDetail = function (speaker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], { speakerId: speaker.id });
    };
    SpeakerListPage.prototype.goToSpeakerTwitter = function (speaker) {
        this.inAppBrowser.create("https://twitter.com/" + speaker.twitter, '_blank');
    };
    SpeakerListPage.prototype.openSpeakerShare = function (speaker) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share ' + speaker.name,
            buttons: [
                {
                    text: 'Copy Link',
                    handler: function () {
                        console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                        if (window['cordova'] && window['cordova'].plugins.clipboard) {
                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                        }
                    }
                },
                {
                    text: 'Share via ...'
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage.prototype.openContact = function (speaker) {
        var mode = this.config.get('mode');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact ' + speaker.name,
            buttons: [
                {
                    text: "Email ( " + speaker.email + " )",
                    icon: mode !== 'ios' ? 'mail' : null,
                    handler: function () {
                        window.open('mailto:' + speaker.email);
                    }
                },
                {
                    text: "Call ( " + speaker.phone + " )",
                    icon: mode !== 'ios' ? 'call' : null,
                    handler: function () {
                        window.open('tel:' + speaker.phone);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.confData.getSpeakers().subscribe(function (speakers) {
            _this.speakers = speakers;
            // simulate a network request that would take longer
            // than just pulling from out local json file
            setTimeout(function () {
                refresher.complete();
                var toast = _this.toastCtrl.create({
                    message: 'as postagens do feed foram atualizadas.',
                    duration: 3000
                });
                toast.present();
            }, 1000);
        });
    };
    SpeakerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-list',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/speaker-list/speaker-list.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Feed</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list *ngFor="let speaker of speakers" [hidden]="speakers.length === 0">\n    <ion-list-header>\n      <ion-avatar item-start>\n        <img [src]="speaker.profilePic" alt="Speaker profile pic">\n      </ion-avatar>\n      <h2 text-capitalize>{{speaker.name}}</h2>\n    </ion-list-header>\n    <ion-item (click)="goToSpeakerDetail(speaker)">{{speaker.title}}</ion-item>\n  </ion-list>\n  <ion-list-header [hidden]="speakers.length > 0">\n    Nenhuma postagem encontrada\n  </ion-list-header>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/speaker-list/speaker-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], SpeakerListPage);
    return SpeakerListPage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_think_event_base__["a" /* ThinkEventBase */]));

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_thinkEvent_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_base__ = __webpack_require__(124);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function (_super) {
    __extends(SignupPage, _super);
    function SignupPage(thinkEventService, navCtrl, loadingCtrl, alertCtrl, userData, platform) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.thinkEventService = thinkEventService;
        _this.navCtrl = navCtrl;
        _this.userData = userData;
        _this.platform = platform;
        _this.signup = {
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
        _this.submitted = false;
        return _this;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        this.showLoading();
        this.submitted = true;
        if (form.valid) {
            try {
                this.thinkEventService.getToken(true).then(function (token) {
                    _this.userData.setToken(token).then(function () {
                        var password = "";
                        if (_this.platform.is('android'))
                            password = _this.signup.password;
                        else
                            password = _this.encrypt("AES", _this.signup.password, "scrt-key-" + _this.signup.userName.toLowerCase());
                        _this.thinkEventService.userCreate({
                            userName: _this.signup.userName.toLowerCase(),
                            name: _this.signup.name,
                            surname: _this.signup.surname,
                            emailAddress: _this.signup.emailAddress.toLowerCase(),
                            password: password,
                            fullname: _this.signup.name + ' ' + _this.signup.surname,
                            token: token
                        }).then(function () {
                            _this.userData.set({
                                userName: _this.signup.userName.toLowerCase(),
                                name: _this.signup.name,
                                surname: _this.signup.surname,
                                fullname: _this.signup.name + ' ' + _this.signup.surname,
                                emailAddress: _this.signup.emailAddress.toLowerCase()
                            });
                            _this.userData.signup(_this.signup.userName);
                            _this.loading.dismiss();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
                        }).catch(function (res) {
                            _this.loading.dismiss();
                            if (res.unAuthorizedRequest)
                                _this.onSignup(form);
                            else
                                _this.show(res.error.message, res.error.details);
                        });
                    });
                });
            }
            catch (ex) {
                this.loading.dismiss();
                console.log(ex);
            }
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Cadastre-se</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	<div class="logo">\n		<img src="assets/img/appicon_512.png" alt="Logo Geek Etec">\n	</div>\n\n	<form #signupForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Usuário</ion-label>\n				<ion-input [(ngModel)]="signup.userName" name="username" type="text" #username="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Nome de usuário é requerido\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Nome</ion-label>\n				<ion-input [(ngModel)]="signup.name" name="name" type="text" #name="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>\n				Nome é requerido\n			</p> \n\n			<ion-item>\n				<ion-label stacked color="primary">Sobrenome</ion-label>\n				<ion-input [(ngModel)]="signup.surname" name="surname" type="text" #surname="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="surname.valid || submitted == false" color="danger" padding-left>\n				Sobrenome é requerido\n			</p> \n\n			<ion-item>\n				<ion-label stacked color="primary">E-mail</ion-label>\n				<ion-input [(ngModel)]="signup.emailAddress" name="emailAddress" type="text" #emailAddress="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="emailAddress.valid || submitted == false" color="danger" padding-left>\n				E-mail é requerido\n			</p> \n\n			<ion-item>\n				<ion-label stacked color="primary">Senha</ion-label>\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Senha requerida\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>Salvar</button>\n		</div>\n	</form>\n\n</ion-content>'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_thinkEvent_service__["a" /* ThinkEventService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], SignupPage);
    return SignupPage;
}(__WEBPACK_IMPORTED_MODULE_5__providers_auth_base__["a" /* AuthBase */]));

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthBase = (function () {
    function AuthBase(_loadingCtrl, _alertCtrl) {
        this.loadingCtrl = _loadingCtrl;
        this.alertCtrl = _alertCtrl;
    }
    AuthBase.prototype.encrypt = function (type, text, key) {
        var options = { mode: __WEBPACK_IMPORTED_MODULE_2_crypto_js__["mode"].CBC, padding: __WEBPACK_IMPORTED_MODULE_2_crypto_js__["pad"].Pkcs7 };
        key = __WEBPACK_IMPORTED_MODULE_2_crypto_js__["enc"].Utf8.parse(key);
        var json = __WEBPACK_IMPORTED_MODULE_2_crypto_js__[type].encrypt(text, key.toString().toLowerCase(), options);
        return json.toString();
    };
    AuthBase.prototype.decrypt = function (type, ciphertext, key) {
        var bytes = __WEBPACK_IMPORTED_MODULE_2_crypto_js__[type].decrypt(ciphertext, key);
        return bytes.toString(__WEBPACK_IMPORTED_MODULE_2_crypto_js__["enc"].Utf8);
    };
    AuthBase.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    AuthBase.prototype.show = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    AuthBase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */]])
    ], AuthBase);
    return AuthBase;
}());

//# sourceMappingURL=auth-base.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close('http://geeketec.com.br')\">Acesse o Site</button>\n      <button ion-item (click)=\"close('http://geeketec.com.br/geek-etec-edicao-2017')\">Como foi em 2017</button>\n      <button ion-item (click)=\"close('https://github.com/Geek-Etec')\">GitHub Repos</button>\n      <button ion-item (click)=\"support()\">Support</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userData) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.userData.setUsername(data.username);
                _this.getUsername();
            }
        });
        alert.present();
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
        });
    };
    AccountPage.prototype.changePassword = function () {
        console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot('LoginPage');
    };
    AccountPage.prototype.support = function () {
        this.nav.push('SupportPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Conta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center *ngIf="username">\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n    <h2>{{username}}</h2>\n\n    <ion-list inset>\n      <button ion-item (click)="support()">Suporte</button>\n      <button ion-item (click)="logout()">Sair</button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_thinkEvent_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_base__ = __webpack_require__(124);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(thinkEventService, loadingCtrl, alertCtrl, navCtrl, userData, platform) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.thinkEventService = thinkEventService;
        _this.navCtrl = navCtrl;
        _this.userData = userData;
        _this.platform = platform;
        _this.login = { userName: '', password: '' };
        _this.submitted = false;
        return _this;
        // Exemplo de criptografia usada na senha
        // let ciphertext = this.encrypt("AES", "my message", "secret key 123");
        // console.log(ciphertext);
        // console.log(this.decrypt("AES", ciphertext, "secret key 123"));
    }
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.showLoading();
        this.submitted = true;
        if (form.valid) {
            try {
                var userDTO = { userName: '', password: '' };
                if (this.platform.is('android'))
                    userDTO.password = this.login.password;
                else
                    userDTO.password = this.encrypt("AES", this.login.password, "scrt-key-" + this.login.userName.toLowerCase());
                userDTO.userName = this.login.userName.toLowerCase();
                this.thinkEventService.login(userDTO).then(function () {
                    _this.userData.login(_this.login.userName.toLowerCase());
                    _this.loading.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
                })
                    .catch(function (res) {
                    _this.loading.dismiss();
                    _this.show(res.error.message, res.error.details);
                });
            }
            catch (ex) {
                this.loading.dismiss();
                console.log(ex);
            }
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon_512.png" alt="Logo Geek Etec">\n	</div>\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Usuário</ion-label>\n				<ion-input [(ngModel)]="login.userName" name="userName" type="text" #userName="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="userName.valid || submitted == false" color="danger" padding-left>\n				Usuário é requerido\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Senha</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Senha é requerida\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Entrar</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>Cadastre-se</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_thinkEvent_service__["a" /* ThinkEventService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_auth_base__["a" /* AuthBase */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_filter_schedule_filter__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_think_event_base__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_availability__ = __webpack_require__(116);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';








var SchedulePage = (function (_super) {
    __extends(SchedulePage, _super);
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, confData, user, navParams, socialSharing, filePath, appAvailability, platform) {
        var _this = _super.call(this, loadingCtrl, alertCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.app = app;
        _this.loadingCtrl = loadingCtrl;
        _this.modalCtrl = modalCtrl;
        _this.navCtrl = navCtrl;
        _this.toastCtrl = toastCtrl;
        _this.confData = confData;
        _this.user = user;
        _this.navParams = navParams;
        _this.socialSharing = socialSharing;
        _this.filePath = filePath;
        _this.appAvailability = appAvailability;
        _this.platform = platform;
        _this.queryText = '';
        _this.segment = 'all';
        _this.excludeTracks = [];
        _this.shownSessions = [];
        _this.groups = [];
        _this.isAndroid = _this.platform.is('android');
        return _this;
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Programação');
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        this.scheduleList && this.scheduleList.closeSlidingItems();
        this.showLoading();
        this.confData.getTimelineDay(this.navParams.data.day, this.queryText, this.excludeTracks, this.segment).then(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
            _this.confDate = data.date;
            _this.loading.dismiss();
        }).catch(function () {
            _this.loading.dismiss();
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.updateSchedule();
            }
        });
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: sessionData.id, name: sessionData.name, day: this.navParams.data.day });
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.user.hasFavorite(sessionData.name)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(slidingItem, sessionData, 'Favorito já adicionado');
        }
        else {
            // remember this session as a user favorite
            this.user.addFavorite(sessionData.name);
            // create an alert instance
            var alert_1 = this.alertCtrl.create({
                title: 'Favorito Adicionado',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert_1.present();
        }
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Gostaria de remover esta sessão dos seus favoritos?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                },
                {
                    text: 'Remover',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.user.removeFavorite(sessionData.name);
                        _this.updateSchedule();
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        var _this = this;
        var msg = "GEEK ETEC 2018 nos dias 26 e 27 de Maio, no IBC de Pres. Prudente - Post via App do #GeekEtec";
        var path = 'file:///android_asset/www/assets/img/ica-slidebox-img-1.png';
        var app;
        this.filePath.resolveNativePath(path)
            .then(function (filePath) {
            _this.convertToBase64(filePath, 'image/png').then(function (data) {
                var base64File = data.toString();
                if (network === "Facebook") {
                    if (_this.platform.is('android')) {
                        app = 'com.facebook.android';
                        _this.appAvailability.check(app)
                            .then(function (yes) {
                            if (yes)
                                console.log(app + ' is available');
                            _this.message("Postando para " + network, fab);
                            _this.socialSharing.shareViaFacebook(msg, base64File, null);
                        }, function (no) {
                            console.log(app + ' is NOT available');
                            if (no === "")
                                _this.message("Ooops... Voc\u00EA n\u00E3o tem o " + network + " instalado, fa\u00E7a a instala\u00E7\u00E3o e tente novamente.", fab);
                        });
                    }
                }
                if (network === "Twitter") {
                    if (_this.platform.is('android')) {
                        app = 'com.twitter.android';
                        _this.appAvailability.check(app)
                            .then(function (yes) {
                            if (yes)
                                console.log(app + ' is available');
                            _this.message("Postando para " + network, fab);
                            _this.socialSharing.shareViaTwitter(msg, base64File, null);
                        }, function (no) {
                            console.log(app + ' is NOT available');
                            if (no === "")
                                _this.message("Ooops... Voc\u00EA n\u00E3o tem o " + network + " instalado, fa\u00E7a a instala\u00E7\u00E3o e tente novamente.", fab);
                        });
                    }
                }
                if (network === "Instagram") {
                    if (_this.platform.is('android')) {
                        app = 'com.instagram.android';
                        _this.appAvailability.check(app)
                            .then(function (yes) {
                            if (yes)
                                console.log(app + ' is available');
                            _this.message("Postando para " + network, fab);
                            _this.socialSharing.shareViaInstagram(msg, base64File);
                        }, function (no) {
                            console.log(app + ' is NOT available');
                            if (no === "")
                                _this.message("Ooops... Voc\u00EA n\u00E3o tem o " + network + " instalado, fa\u00E7a a instala\u00E7\u00E3o e tente novamente.", fab);
                        });
                    }
                }
                if (network === "Whatsapp") {
                    if (_this.platform.is('android')) {
                        app = 'com.whatsapp';
                        _this.appAvailability.check(app)
                            .then(function () {
                            console.log(app + ' is available');
                            _this.message("Postando para " + network, fab);
                            _this.socialSharing.shareViaWhatsApp(msg, base64File, null);
                        }, function (no) {
                            console.log(app + ' is NOT available');
                            if (no === "")
                                _this.message("Ooops... Voc\u00EA n\u00E3o tem o " + network + " instalado, fa\u00E7a a instala\u00E7\u00E3o e tente novamente.", fab);
                        });
                    }
                }
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    SchedulePage.prototype.message = function (msg, fab) {
        var loading = this.loadingCtrl.create({
            content: msg,
            duration: 5000
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    SchedulePage.prototype.convertToBase64 = function (url, outputFormat) {
        return new Promise(function (resolve) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var canvas = document.createElement('CANVAS'), ctx = canvas.getContext('2d'), dataURL;
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                canvas = null;
                resolve(dataURL);
            };
            img.src = url;
        });
    };
    SchedulePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.confData.getTimelineDay(this.navParams.data.day, this.queryText, this.excludeTracks, this.segment).then(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
            _this.confDate = data.date;
            // simulate a network request that would take longer
            // than just pulling from out local json file
            setTimeout(function () {
                refresher.complete();
                var toast = _this.toastCtrl.create({
                    message: 'As sessões foram atualizadas.',
                    duration: 3000
                });
                toast.present();
            }, 1000);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */])
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()">\n      <ion-segment-button value="all">\n        Todos\n      </ion-segment-button>\n      <ion-segment-button value="favorites">\n        Favoritos\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="updateSchedule()"\n                   placeholder="Pesquisa">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list #scheduleList [hidden]="shownSessions === 0">\n\n    <ion-item-group *ngFor="let group of groups" [hidden]="group.hide">\n\n      <ion-item-divider sticky>\n        <ion-label>\n          {{confDate}} {{group.time}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor="let session of group.sessions" #slidingItem [attr.track]="session.tracks[0].title | lowercase" [hidden]="session.hide">\n\n        <button ion-item (click)="goToSessionDetail(session)">\n          <h3>{{session.name}}</h3>\n          <p>\n            {{session.timeStart}} &mdash;\n            {{session.timeEnd}}:\n            {{session.location}}\n          </p>\n        </button>\n\n        <ion-item-options>\n          <button ion-button color="favorite" (click)="addFavorite(slidingItem, session)" *ngIf="segment === \'all\'">\n            Favorito\n          </button>\n          <button ion-button color="danger" (click)="removeFavorite(slidingItem, session, \'Remove Favorite\')" *ngIf="segment === \'favorites\'">\n            Remover\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-item-group>\n\n  </ion-list>\n\n  <ion-list-header [hidden]="shownSessions > 0">\n    Nenhuma sessão encontrada\n  </ion-list-header>\n\n  <ion-fab [hidden]="!isAndroid" bottom right #fab>\n    <button ion-fab><ion-icon name="share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="whatsapp" (click)="openSocial(\'Whatsapp\', fab)"><ion-icon name="logo-whatsapp"></ion-icon></button>\n      <button ion-fab color="instagram" (click)="openSocial(\'Instagram\', fab)"><ion-icon name="logo-instagram"></ion-icon></button>\n      <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n\n</ion-content>'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_availability__["a" /* AppAvailability */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], SchedulePage);
    return SchedulePage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_think_event_base__["a" /* ThinkEventBase */]));

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = (function () {
    function ScheduleFilterPage(confData, navParams, viewCtrl) {
        var _this = this;
        this.confData = confData;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = this.navParams.data;
        this.confData.getTracks().then(function (trackNames) {
            trackNames.forEach(function (trackName) {
                _this.tracks.push({
                    name: trackName,
                    isChecked: (excludedTrackNames.indexOf(trackName) === -1)
                });
            });
        });
    }
    ScheduleFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    ScheduleFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule-filter',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/schedule-filter/schedule-filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cancelar</button>\n    </ion-buttons>\n\n    <ion-title>\n      Filtrar Sessões\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="applyFilters()" strong>Feito</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>Categorias</ion-list-header>\n\n    <ion-item *ngFor="let track of tracks" [attr.track]="track.name | lowercase">\n      <span item-start class="dot"></span>\n      <ion-label>{{track.name}}</ion-label>\n      <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n      Redefinir todos os filtros\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/schedule-filter/schedule-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());

//# sourceMappingURL=schedule-filter.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpeakerDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.loadFeed().subscribe(function (data) {
            if (data && data.speakers) {
                for (var _i = 0, _a = data.speakers; _i < _a.length; _i++) {
                    var speaker = _a[_i];
                    if (speaker && speaker.id === _this.navParams.data.speakerId) {
                        _this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    };
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push('SessionDetailPage', { sessionId: session.id });
    };
    SpeakerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-detail',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/speaker-detail/speaker-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{speaker?.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="speaker-detail">\n  <div text-center *ngIf="speaker">\n    <img [src]="speaker.profilePic" [alt]="speaker.name"><br>\n\n    <!--button ion-button icon-only clear small color="twitter">\n      <ion-icon name="logo-twitter"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="github">\n      <ion-icon name="logo-github"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="instagram">\n      <ion-icon name="logo-instagram"></ion-icon>\n    </button-->\n  </div>\n\n  <p>{{speaker?.about}}</p>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/speaker-detail/speaker-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SpeakerDetailPage);
    return SpeakerDetailPage;
}());

//# sourceMappingURL=speaker-detail.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.set = function (userData) {
        this.storage.set('userData', userData);
    };
    UserData.prototype.get = function () {
        return this.storage.get('userData');
    };
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.setToken = function (token) {
        return this.storage.set(token, "token");
    };
    UserData.prototype.getToken = function () {
        return this.storage.get("token");
    };
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Pular</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Bem vindo ao app do <b>GEEK ETEC</b>\n      </h2>\n      <p>\n        O aplicativo do <b>Geek ETEC</b> é uma maneira de melhorar sua experiência no evento e proporcionar melhor interação entre os participantes.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n      <h2 class="slide-title" >O que é o Geek ETEC?</h2>\n      <p><b>Geek ETEC</b> é um evento para os amantes e apreciadores da cultura geek, com vários concursos, campeonatos, apresentações, oficinas e shows com diversos elementos da cultura geek.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n      <h2 class="slide-title">Alguém falou em fome?</h2>\n      <p>No <b>Geek ETEC</b> há várias opções de alimentação. Você pode se divertir e aproveitar ao máximo o evento.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Preparado?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continuar\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_thinkEvent_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl, userData, thinkEventService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.userData = userData;
        this.thinkEventService = thinkEventService;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
    };
    SupportPage.prototype.submit = function (form) {
        var _this = this;
        //Verifica se o usuário está logado
        this.userData.get().then(function (user) {
            if (user === undefined || user === null) {
                var error = _this.toastCtrl.create({
                    message: 'Para solicitar um suporte é necessário criar uma conta de usuário.',
                    duration: 3000
                });
                error.present();
            }
            else {
                _this.submitted = true;
                if (form.valid) {
                    _this.thinkEventService.sendEmail({
                        fromEmail: "'" + user.fullname + "' <" + user.emailAddress + ">",
                        toEmail: "geeketec@hotmail.com",
                        subject: "Aplicativo",
                        message: _this.supportMessage,
                        isImportant: "true"
                    });
                    _this.supportMessage = '';
                    _this.submitted = false;
                    var toast = _this.toastCtrl.create({
                        message: 'Sua solicitação de suporte foi enviada.',
                        duration: 3000
                    });
                    toast.present();
                }
            }
        });
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Deixar esta página?',
                message: 'Tem certeza de que deseja sair desta página? Sua mensagem de suporte não será enviada.'
            });
            alert.addButton({ text: 'Ficar', handler: reject });
            alert.addButton({ text: 'Sair', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/support/support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Suporte</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon_512.png" alt="Logo Geek Etec">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Digite sua mensagem de suporte abaixo</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Mensagem de suporte é necessária\n		</p>\n\n		<div padding>\n			<button ion-button block type="submit">Enviar</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_thinkEvent_service__["a" /* ThinkEventService */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(257);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__thinkEvent_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__db_provider__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConferenceData = (function () {
    function ConferenceData(http, user, thinkEventService, dbProvider) {
        this.http = http;
        this.user = user;
        this.thinkEventService = thinkEventService;
        this.dbProvider = dbProvider;
        this.baseApiUrl = "https://api-thinkevent.azurewebsites.net/api/";
    }
    ConferenceData.prototype.checkVersion = function (force) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.dbProvider.get("schedulingVersion").then(function (version) {
                _this.thinkEventService.getToken(force).then(function (token) {
                    var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                        'Authorization': 'Bearer ' + token
                    });
                    var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
                    _this.thinkEventService.getVersion(options).then(function (versionServer) {
                        _this.dbProvider.set("schedulingVersion", versionServer);
                        resolve(Number(versionServer || 0) > Number(version || 0));
                    }).catch(function () {
                        _this.checkVersion(true);
                    });
                })
                    .catch(function () {
                    _this.loadSchedule().map(function (resData) {
                        resolve(resData);
                    });
                });
            });
        });
    };
    ConferenceData.prototype.load = function (force, isLocal, day) {
        var _this = this;
        return new Promise(function (resolve) {
            if (isLocal) {
                var data = {
                    items: _this.data.items.find(function (item) { return item.date === day.date; })
                };
                resolve(data);
            }
            else {
                _this.checkVersion(force).then(function (refresh) {
                    if (!refresh && _this.data) {
                        resolve(_this.data);
                    }
                    else {
                        _this.thinkEventService.getToken(force).then(function (token) {
                            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                                'Authorization': 'Bearer ' + token
                            });
                            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
                            _this.http.get(_this.baseApiUrl + 'services/app/Schedule/GetListAsync', options)
                                .map(_this.processData, _this)
                                .subscribe(function (data) {
                                for (var i = 0; i < data.items.length; i++) {
                                    data.items[i].date = data.items[i].date.substring(8, 10) + "/" + data.items[i].date.substring(5, 7) + "/" + data.items[i].date.substring(0, 4);
                                }
                                resolve(data);
                            }, function (err) {
                                console.log(err);
                                _this.loadSchedule().map(function (resData) {
                                    resolve(resData);
                                });
                            });
                        });
                    }
                }).catch(function () {
                    _this.load(false, true);
                });
            }
        });
    };
    ConferenceData.prototype.loadFeed = function () {
        if (this.data !== undefined && this.data !== null && this.data.speakers !== undefined && this.data.speakers.length > 0) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data-api-feed.json')
                .map(this.processFeed, this);
        }
    };
    ConferenceData.prototype.loadMap = function () {
        if (this.data != undefined && this.data.map) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data-api-map.json')
                .map(this.processMap, this);
        }
    };
    ConferenceData.prototype.loadSchedule = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data-api.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processMap = function (data) {
        if (this.data === undefined)
            this.data = {};
        this.data.map = data.json().result["map"];
        return this.data;
    };
    ConferenceData.prototype.processFeed = function (data) {
        this.data.speakers = data.json().result["speakers"];
        return this.data;
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json().result;
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.items.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session !== undefined && session.tracks.length > 0) {
                        session.tracks.forEach(function (track) {
                            if (_this.data === undefined)
                                _this.data = {};
                            if (_this.data.tracks === undefined)
                                _this.data.tracks = [];
                            if (_this.data.tracks.length === 0 ||
                                _this.data.tracks.filter(function (t) { return t.title === track.title; }).length === 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimelineDay = function (day, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return new Promise(function (resolve) {
            _this.load().then(function (data) {
                if (data !== undefined && data.length > 0) {
                    _this.loadSchedule().map(function (resData) {
                        resolve(_this.getDay(resData, day, queryText, excludeTracks, segment));
                    });
                }
                else {
                    resolve(_this.getDay(data, day, queryText, excludeTracks, segment));
                }
            }).catch(function () {
                _this.load(true).then(function (data) {
                    if (data !== undefined && data.length > 0) {
                        _this.loadSchedule().map(function (resData) {
                            resolve(_this.getDay(resData, day, queryText, excludeTracks, segment));
                        });
                    }
                    else {
                        resolve(_this.getDay(data, day, queryText, excludeTracks, segment));
                    }
                });
            });
        });
    };
    ConferenceData.prototype.getTimeline = function (queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return new Promise(function (resolve) {
            _this.load().then(function (data) {
                if (data !== undefined && data.length > 0) {
                    _this.loadSchedule().map(function (resData) {
                        resolve(_this.getDays(resData, queryText, excludeTracks, segment));
                    });
                }
                else {
                    resolve(_this.getDays(data, queryText, excludeTracks, segment));
                }
            }).catch(function () {
                _this.load(false, true).then(function (data) {
                    if (data !== undefined && data.length > 0) {
                        _this.loadSchedule().map(function (resData) {
                            resolve(_this.getDays(resData, queryText, excludeTracks, segment));
                        });
                    }
                    else {
                        resolve(_this.getDays(data, queryText, excludeTracks, segment));
                    }
                });
            });
        });
    };
    ConferenceData.prototype.getDay = function (data, day, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        if (day !== undefined)
            day = data.items.find(function (item) { return item.date === day.date; });
        else
            day = data.items[0];
        day.shownSessions = 0;
        queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
        var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
        day.groups.forEach(function (group) {
            group.hide = true;
            group.sessions.forEach(function (session) {
                // check if this session should show or not
                _this.filterSession(session, queryWords, excludeTracks, segment);
                if (!session.hide) {
                    // if this session is not hidden then this group should show
                    group.hide = false;
                    day.shownSessions++;
                }
            });
        });
        return day;
    };
    ConferenceData.prototype.getDays = function (data, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        var day = [];
        var _loop_1 = function (dayIndex) {
            day.push(data.items[dayIndex]);
            day[dayIndex].shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day[dayIndex].groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day[dayIndex].shownSessions++;
                    }
                });
            });
        };
        for (var dayIndex = 0; dayIndex < data.items.length; dayIndex++) {
            _loop_1(dayIndex);
        }
        return day;
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName.title) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.loadFeed().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().then(function (data) {
            return data.tracks.map(function (prop) { return prop.title; }).sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.loadMap().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_6__thinkEvent_service__["a" /* ThinkEventService */],
            __WEBPACK_IMPORTED_MODULE_7__db_provider__["a" /* DbProvider */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_availability__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_popover_about_popover__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_account__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_map_map__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_event_event__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_schedule_schedule__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_schedule_filter_schedule_filter__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_session_detail_session_detail__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_speaker_detail_speaker_detail__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_speaker_list_speaker_list__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tabs_page_tabs_page__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tutorial_tutorial__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_support_support__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_conference_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_db_provider__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_thinkEvent_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__utils_loading__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_base__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_think_event_base__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_support_support__["a" /* SupportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_event_event__["a" /* EventPage */], name: 'Event', segment: 'event' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_schedule_schedule__["a" /* SchedulePage */], name: 'Schedule', segment: 'schedule' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_session_detail_session_detail__["a" /* SessionDetailPage */], name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], name: 'ScheduleFilter', segment: 'scheduleFilter' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], name: 'SpeakerList', segment: 'speakerList' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */], name: 'Map', segment: 'map' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_support_support__["a" /* SupportPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_conference_data__["a" /* ConferenceData */],
                __WEBPACK_IMPORTED_MODULE_27__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_28__providers_db_provider__["a" /* DbProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_thinkEvent_service__["a" /* ThinkEventService */],
                __WEBPACK_IMPORTED_MODULE_30__utils_loading__["a" /* LoadingUtils */],
                __WEBPACK_IMPORTED_MODULE_31__providers_auth_base__["a" /* AuthBase */],
                __WEBPACK_IMPORTED_MODULE_32__providers_think_event_base__["a" /* ThinkEventBase */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_availability__["a" /* AppAvailability */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_map_map__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_event_event__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_speaker_list_speaker_list__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_support_support__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_conference_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_data__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Programação', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_11__pages_event_event__["a" /* EventPage */], index: 0, icon: 'calendar' },
            { title: 'Feed', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_12__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], index: 1, icon: 'contacts' },
            { title: 'Parceiros', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */], index: 2, icon: 'map' },
            { title: 'Sobre', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], index: 3, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Conta', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Suporte', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Sair', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Entrar', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Suporte', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Cadastre-se', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tabs_page_tabs_page__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
        }
    };
    ConferenceApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/app/app.template.html"*/'<ion-split-pane>\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navegar\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Conta\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Ver Tutorial\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navegar\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Conta\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Ver Tutorial\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_15__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_14__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingUtils = (function () {
    function LoadingUtils(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingUtils.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoadingUtils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* LoadingController */]])
    ], LoadingUtils);
    return LoadingUtils;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_event__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__event_event__["a" /* EventPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/tabs-page/tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n  <ion-tab [root]="tab1Root" tabTitle="Sessões" tabIcon="calendar" tabUrlPath="conference-schedule"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Feed" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Parceiros" tabIcon="map"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Sobre" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Volumes/Arquivos/Geek-Etec/ionic-conference-app/src/pages/tabs-page/tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThinkEventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_provider__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ThinkEventService = (function () {
    function ThinkEventService(http, dbProvider) {
        this.http = http;
        this.dbProvider = dbProvider;
        this.baseApiUrl = "https://api-thinkevent.azurewebsites.net/api/";
        this.tenantId = 2;
        this.urlBaseFuncThinkAMAPI = "http://func.thinkam.net/api/";
        this.productId = "c5c33004-525d-4048-918c-dc077a3833dc";
    }
    ThinkEventService.prototype.getVersion = function (options) {
        var _this = this;
        return new Promise(function (resolve) {
            try {
                _this.http.get(_this.baseApiUrl + "services/app/Schedule/GetVersion", options)
                    .subscribe(function (data) { return resolve(data.json().result); }, function (err) {
                    console.log(err);
                    resolve(false);
                });
            }
            catch (error) {
                console.log(error);
                resolve(false);
            }
        });
    };
    ThinkEventService.prototype.sendEmail = function (model) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.urlBaseFuncThinkAMAPI + "email", {
                "fromEmail": model.fromEmail,
                "toEmail": model.toEmail,
                "subject": model.subject,
                "message": model.message,
                "isImportant": model.isImportant
            }).subscribe(function (res) {
                console.log(res);
                resolve(true);
            });
        });
    };
    ThinkEventService.prototype.getToken = function (force) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!force) {
                _this.dbProvider.get("token").then(function (token) {
                    if (token != null && token.length > 0)
                        resolve(token);
                });
            }
            _this.http.post(_this.baseApiUrl + "TokenAuth/Authenticate", {
                userNameOrEmailAddress: "geeketec",
                password: "G33ker123",
                tenantId: _this.tenantId
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.dbProvider.set("token", res.result.accessToken || "");
                resolve(res.result.accessToken || "");
            });
        });
    };
    ThinkEventService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseApiUrl + "TokenAuth/Authenticate", {
                "userNameOrEmailAddress": user.userName,
                "password": user.password,
                "tenantId": _this.tenantId
            })
                .map(function (res) { return res.json(); })
                ._catch(function (error) { return reject(error.json()); })
                .subscribe(function (res) {
                _this.dbProvider.set("token", res.result.accessToken || "");
                resolve(res.result.accessToken || "");
            });
        });
    };
    ThinkEventService.prototype.userCreate = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
                'Authorization': 'Bearer ' + user.token
            });
            _this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: _this.headers });
            _this.http.post(_this.baseApiUrl + "services/app/User/Create", {
                "userName": user.userName,
                "name": user.name,
                "surname": user.surname,
                "emailAddress": user.emailAddress,
                "isActive": true,
                "roleNames": [
                    "User"
                ],
                "password": user.password,
                "tenantId": _this.tenantId
            }, _this.options)
                .map(function (res) { return res.json(); })
                ._catch(function (error) { return reject(error.json()); })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    ThinkEventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__db_provider__["a" /* DbProvider */]])
    ], ThinkEventService);
    return ThinkEventService;
}());

//# sourceMappingURL=thinkEvent-service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThinkEventBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThinkEventBase = (function () {
    function ThinkEventBase(_loadingCtrl, _alertCtrl) {
        this.loadingCtrl = _loadingCtrl;
        this.alertCtrl = _alertCtrl;
    }
    ThinkEventBase.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ThinkEventBase.prototype.show = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ThinkEventBase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */]])
    ], ThinkEventBase);
    return ThinkEventBase;
}());

//# sourceMappingURL=think-event-base.js.map

/***/ })

},[234]);
//# sourceMappingURL=main.js.map