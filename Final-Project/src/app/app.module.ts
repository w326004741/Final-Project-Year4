import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { App } from 'ionic-angular';
//add 3 import page in here,and the {WelcomePage} from welcome.ts file
// is a class name.
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { SignupPage } from '../pages/signup/signup';
import { ResetpwdPage} from '../pages/resetpwd/resetpwd';

// Add 2 imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
 

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StreamingMedia } from '@ionic-native/streaming-media';
// import { Media } from '@ionic-native/media';
//Add firebaseAuth
//Ref: https://console.firebase.google.com/project/netmusic-c9a02/overview?hl=zh-cn
const firebaseAuth = {  //firebase登陆方法配置
  apiKey: "AIzaSyCWyA_drTwdJ-_N8OA2vajNXfvKxyzh9ks",
  authDomain: "netmusic-c9a02.firebaseapp.com",
  databaseURL: "https://netmusic-c9a02.firebaseio.com",
  projectId: "netmusic-c9a02",
  storageBucket: "netmusic-c9a02.appspot.com",
  messagingSenderId: "971450191473"
};


@NgModule({ //被@NgModule修饰的class都被成为ng Module
  declarations: [ //声明当前模块需要的指定 组件信息
    MyApp,
    //add 3 pages in here
    WelcomePage,
    LoginPage,
    SignupPage,
    LoggedinPage,
    ResetpwdPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [      //导入其他模块，就是要使用其他模块的功能，必须要导入。封装好的。
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Add 2 imports 
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp], //启动模块or根模块。通常是app启动的根组件。在除了根模块以外的其他模块不能使用。
  entryComponents: [ //入口组件 懒加载机制，启动时只会启动添加在内的Page。
    MyApp,
   //add 3 pages in here
    WelcomePage,
    LoginPage,
    SignupPage,
    LoggedinPage,
    ResetpwdPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [ //服务提供者，主要用来定义服务(service)。
    StatusBar,
    SplashScreen, //启动画面
    LoadingController,
    StreamingMedia,
    App,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
