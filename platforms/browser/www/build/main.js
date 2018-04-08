webpackJsonp([5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoggedinPage = (function () {
    function LoggedinPage(app, fire, navCtrl, navParams) {
        this.app = app;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.email = fire.auth.currentUser.email;
    }
    // logout按钮， html 添加button
    LoggedinPage.prototype.logout = function () {
        // push():是异步的，带有过度效果，可以返回(有返回按钮)
        // setRoot():是一个view之间的切换，所以不带有任何返回button之类的东西，
        // this.nav.setRoot(page,params,opt);
        // 1、page 组件: 想放进导航的 组件名称 
        // 2、params 参数：像下一个页面传递参数 Object类型 
        // 3、过度完成。返回一个promise
        window.localStorage.removeItem(this.email);
        // this.navCtrl.setRoot(WelcomePage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
        console.log(this.fire.auth.currentUser);
        //window.localStorage.removeItem('email');
    };
    LoggedinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoggedinPage');
    };
    return LoggedinPage;
}());
LoggedinPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-loggedin',template:/*ion-inline-start:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/loggedin/loggedin.html"*/'<!--\n  Generated template for the LoggedinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/images/netMusicLogo1.png" class="hlogo" /><ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h2>Welcome to NetMusic {{email}}!!</h2>\n  <br /> \n  <!-- 在这里添加一个logout按钮，功能是退出登录  https://ionicframework.com/docs/components/#buttons-->\n  <button ion-button  (click)="logout()">Logout</button>\n</ion-content>\n'/*ion-inline-end:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/loggedin/loggedin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LoggedinPage);

//# sourceMappingURL=loggedin.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Add import  AngularFireAuth



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(loadingCtrl, alertCtrl, fire, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    //弹窗提示
    SignupPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Dear User :😱',
            subTitle: 'Please check enter your email !!! ',
            buttons: ['OK']
        }).present();
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        //Api connections
        //定向导航到TabsPage，要记住上面的import
        // this.navCtrl.push(LoginPage);
        //写注册 登陆方法用邮箱
        this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value)
            .then(function (data) {
            console.log('got data', _this.fire.auth.currentUser);
            _this.alert('Registered!');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            var loader = _this.loadingCtrl.create({
                content: "Please wait...",
                duration: 500
            });
            loader.present();
        })
            .catch(function (error) {
            console.log('got an error', error);
            _this.alert(error.message);
        });
        console.log('Would register user with ', this.uname.value, this.password.value);
    };
    return SignupPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], SignupPage.prototype, "uname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], SignupPage.prototype, "password", void 0);
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title>Create Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>  \n    <ion-item>\n      <ion-label floating>Username</ion-label><!--floating-->\n      <ion-input type="text" #username></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" #password></ion-input>\n    </ion-item>\n\n    <button ion-button full class="marginTop" (click)="signup()">Signup</button>\n  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ResetpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetpwdPage = (function () {
    function ResetpwdPage(alertCtrl, toastCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResetpwdPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Dear User :😱',
            subTitle: 'Please enter the correct email!!! ',
            buttons: ['OK']
        }).present();
    };
    ResetpwdPage.prototype.resetpassword = function () {
        var _this = this;
        this.fire.auth.sendPasswordResetEmail(this.email)
            .then(function (date) {
            console.log('send email');
            var toast = _this.toastCtrl.create({
                message: 'Congratulations🎉!! Please check your email to change your new password.',
                duration: 3000,
                position: _this.position
            });
            toast.present(toast);
        })
            .catch(function (error) {
            console.log('got an error', error);
            _this.alert(error.message);
        });
    };
    ResetpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetpwdPage');
    };
    return ResetpwdPage;
}());
ResetpwdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-resetpwd',template:/*ion-inline-start:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/resetpwd/resetpwd.html"*/'<!--\n  Generated template for the ResetpwdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" #username></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Reset Password</ion-label>\n        <ion-input type="password" #resetpassword></ion-input>\n      </ion-item>\n      \n    <ion-item>\n      <ion-label floating>Check Password</ion-label>\n      <ion-input type="password" #checkpassword></ion-input>\n    </ion-item> -->\n    <ion-item>\n      <ion-label floating>Email Address</ion-label>>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n    \n    <button ion-button full class="marginTop" (click)="resetpassword()">Reset Password</button>\n  <!-- </ion-list> -->\n</ion-content>'/*ion-inline-end:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/resetpwd/resetpwd.html"*/,
    })
    // @Injectable()
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ResetpwdPage);

//# sourceMappingURL=resetpwd.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/loggedin/loggedin.module": [
		318,
		4
	],
	"../pages/login/login.module": [
		319,
		3
	],
	"../pages/resetpwd/resetpwd.module": [
		321,
		2
	],
	"../pages/signup/signup.module": [
		320,
		1
	],
	"../pages/welcome/welcome.module": [
		322,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loggedin_loggedin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(33);
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
    function TabsPage(fire) {
        this.fire = fire;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__loggedin_loggedin__["a" /* LoggedinPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.email = fire.auth.currentUser.email;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Music" tabIcon="musical-notes"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(83);
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
    function AboutPage(streamingMedia, navCtrl) {
        this.streamingMedia = streamingMedia;
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.playAudio = function () {
        var options = {
            successCallback: function () { console.log('Finished Audio'); },
            errorCallback: function (e) { console.log('Error: ', e); },
            initFullscreen: false,
        };
        this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/%E5%90%B4%E4%BA%A6%E5%87%A1%20-%20JULY.mp3', options);
    };
    AboutPage.prototype.stopAudio = function () {
        this.streamingMedia.stopAudio();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n      <img src="assets/images/netMusicLogo1.png" class="hlogo" />\n      <ion-title>Music</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding id="music">\n  <ion-list>\n    <ion-item>\n        <button ion-button class="circle" color="danger" small>\n            <ion-icon name=\'skip-backward\'></ion-icon>\n          </button>\n\n        <button ion-button (click)="playAudio()"  class="circle" color="danger" icon-only  small>\n            <ion-icon name=\'play\' style="zoom:1.0;"></ion-icon>\n            <!-- style="zoom:1.0;" and small: setting icon size -->\n          </button>\n          <button ion-button (click)="stopAudio()"  class="circle" color="danger" icon-only  small>\n            <ion-icon name=\'pause\' style="zoom:1.0;"></ion-icon>\n            <!-- style="zoom:1.0;" and small: setting icon size -->\n          </button>\n\n          <button ion-button  class="circle" color="danger">\n              <ion-icon name=\'skip-forward\'></ion-icon>\n            </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Media, MediaObject } from '@ionic-native/media';
var ContactPage = (function () {
    // file: MediaObject;
    function ContactPage(streamingMedia, navCtrl) {
        this.streamingMedia = streamingMedia;
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.startVideo = function () {
        var options = {
            successCallback: function () { console.log('Finished Video'); },
            errorCallback: function (e) { console.log('Error: ', e); },
            orientation: 'portrait'
        };
        this.streamingMedia.playVideo('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4', options);
    };
    ContactPage.prototype.startAudio = function () {
        var options = {
            successCallback: function () { console.log('Finished Audio'); },
            errorCallback: function (e) { console.log('Error: ', e); },
            initFullscreen: false,
        };
        this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/%E5%90%B4%E4%BA%A6%E5%87%A1%20-%20JULY.mp3', options);
    };
    ContactPage.prototype.stopAudio = function () {
        this.streamingMedia.stopAudio();
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/contact/contact.html"*/'<ion-header>\n    <ion-navbar>\n      <script src="lib/ngCordova/dist/ng-cordova.js"></script>\n      <script src="cordova.js"></script>\n        <img src="assets/images/netMusicLogo1.png" class="hlogo" />\n        <ion-title>Contact</ion-title>\n      </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button full (click)="startVideo()">Start Video</button>\n    <button ion-button full (click)="startAudio()">Start Audio</button>\n    <button ion-button full (click)="stopAudio()" color="danger">Stop Audio</button>\n    <!-- <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item> -->\n</ion-content>\n'/*ion-inline-end:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ContactPage);

// startAudio() {
//   this.file.play();
// }
// this.file = this.media.create('/Users/weichenwang/Year4/Final-Project-Year4/src/assets/songs/song1.mp3');
// this.file.onStatusUpdate.subscribe(status => console.log(status));
// this.file.onSuccess.subscribe(() => console.log('Action is successful!'));
// this.file.onError.subscribe(error => console.log('Error!', error)); 
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_loggedin_loggedin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_resetpwd_resetpwd__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_streaming_media__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//add 3 import page in here,and the {WelcomePage} from welcome.ts file
// is a class name.





// Add 2 imports










// import { Media } from '@ionic-native/media';
//Add firebaseAuth
//Ref: https://console.firebase.google.com/project/netmusic-c9a02/overview?hl=zh-cn
var firebaseAuth = {
    apiKey: "AIzaSyCWyA_drTwdJ-_N8OA2vajNXfvKxyzh9ks",
    authDomain: "netmusic-c9a02.firebaseapp.com",
    databaseURL: "https://netmusic-c9a02.firebaseio.com",
    projectId: "netmusic-c9a02",
    storageBucket: "netmusic-c9a02.appspot.com",
    messagingSenderId: "971450191473"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            //add 3 pages in here
            __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_loggedin_loggedin__["a" /* LoggedinPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_resetpwd_resetpwd__["a" /* ResetpwdPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/loggedin/loggedin.module#LoggedinPageModule', name: 'LoggedinPage', segment: 'loggedin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/resetpwd/resetpwd.module#ResetpwdPageModule', name: 'ResetpwdPage', segment: 'resetpwd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            // Add 2 imports 
            __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            //add 3 pages in here
            __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_loggedin_loggedin__["a" /* LoggedinPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_resetpwd_resetpwd__["a" /* ResetpwdPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            // Media,
            // MediaObject,
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//add welcomePage is class name.

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */]; //change to WelcomePage
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/weichenwang/Year4/Final-Project-Year4/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/weichenwang/Year4/Final-Project-Year4/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import WelcomePage in here.

var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //logout 功能
    HomePage.prototype.logout = function () {
        //定向导航到WelcomePage，要记住上面的import
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="assets/images/netMusicLogo1.png" class="hlogo" /><ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to NetMusic !</h2>\n  <button ion-button  class="marginTop" (click)="logout()">Logout</button>\n</ion-content>\n'/*ion-inline-end:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resetpwd_resetpwd__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//在Componet后添加 ViewChild



// import 3 Pages in here



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(loadingCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    //定向导航到LoginPage，要记住上面的import
    WelcomePage.prototype.login = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        //定向导航到SignupPage，要记住上面的import
        // {animate:false}的作用是加快页面转化的速度，能够immediately的出现
        //if()
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */], {}, { animate: false });
    };
    //reset password page
    WelcomePage.prototype.resetpwd = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__resetpwd_resetpwd__["a" /* ResetpwdPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <!--color is 给标题块加颜色-->\n  <ion-navbar color="primary">\n      <img src="assets/images/netMusicLogo1.png" class="hlogo" /><ion-title>🎶 Net Music 🎶</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="welcome" >\n    <img src="assets/images/netMusicLogo1.png" class="wlogo" />\n    <!--Big Title-->\n    <h2> Welcome to Net Music </h2>\n    <!--describe-->\n    <div> Enjoy best music </div>\n    <!--Button setting style, class写在.scss文件里，click event-->\n    <div id="Buttons">\n    <button ion-button full class="marginTop" (click)="login()">Login</button>\n    <button ion-button block outline  (click)="signup()">Register</button>\n    <button ion-button block clear (click)="resetpwd()">Reset Password</button>\n    </div>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 在import里添加了AlertController。

 //copy form signup.ts


var LoginPage = (function () {
    function LoginPage(loadingCtrl, fire, navCtrl, navParams, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    } // 在constructor 里添加了 public alertCtrl: AlertController, private fire:AngularFireAuth
    //登陆成功弹窗
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Dear User : 🎉',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.alert1 = function (message) {
        this.alertCtrl.create({
            title: 'Dear User :😱',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        // firebase.auth.Auth.signInWithEmailAndPassword(email: string, password: string): Promise<any>
        // this.uname.value => username(email)当前用户的帐号，this.password.value => 当前用户的密码，直接用this.引用了。
        this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
            .then(function (data) {
            console.log('got some data', _this.fire.auth.currentUser); //在console传出当前账号用户的信息.
            _this.alert('Success! You are logged in'); //套用当前文件的alert()function中的message,弹窗信息.
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); // 定向导航到LoggedinPage,且不可返回。如想要返回: 改用navCtrl.push()
            // 设置当前导航堆栈的根目录.可以把LoggedinPage更改为播放器主界面.
            // setRoot(): 只是view之间的切换，不带有任何返回button之类的东西。 不能返回的
            // user is logged in
            var loader = _this.loadingCtrl.create({
                content: "Please wait...",
                duration: 500
            });
            loader.present();
        })
            .catch(function (error) {
            console.log('got an error', error); // if登录信息不匹配，then 在这里报错，并弹出alert信息.error 信息自动生成。
            _this.alert1(error.message); // email error: message: "The email address is badly formatted."
            // password error: message: "The password is invalid or the user does not have a password"
        });
        // 登录成功后在console.log中显示 would sign in with + 登录的帐号和密码。
        console.log('Would sign in with ', this.uname.value, this.password.value);
        //console.log(this.uname.value, this.password.value);//Add console.log
        // if(this.uname.value == "admin" && this.password.value == "admin") {}
        // //Copy ionic document Components-Alerts-Basic Usage(警告弹窗)
        // let alert = this.alertCtrl.create({  //下面是弹窗内容
        //   title: '😄  Login Successful !',
        //   subTitle: 'Happy Day !',
        //   buttons: ['OK']
        // });
        // alert.present(); 
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], LoginPage.prototype, "uname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], LoginPage.prototype, "password", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n      <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>  \n    <ion-item>\n      <ion-label floating>Username</ion-label><!--floating-->\n      <ion-input type="text" #username></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" #password></ion-input>\n    </ion-item>\n\n    <button ion-button full class="marginTop" (click)="login()">Login</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/weichenwang/Year4/Final-Project-Year4/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map