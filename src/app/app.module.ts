import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//add 3 import page in here,and the {WelcomePage} from welcome.ts file
// is a class name.
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { SignupPage } from '../pages/signup/signup';
// Add 2 imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
 

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Add firebaseAuth
//Ref: https://console.firebase.google.com/project/netmusic-c9a02/overview?hl=zh-cn
const firebaseAuth = {
  apiKey: "AIzaSyCWyA_drTwdJ-_N8OA2vajNXfvKxyzh9ks",
  authDomain: "netmusic-c9a02.firebaseapp.com",
  databaseURL: "https://netmusic-c9a02.firebaseio.com",
  projectId: "netmusic-c9a02",
  storageBucket: "netmusic-c9a02.appspot.com",
  messagingSenderId: "971450191473"
};


@NgModule({
  declarations: [
    MyApp,
    //add 3 pages in here
    WelcomePage,
    LoginPage,
    SignupPage,
    LoggedinPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Add 2 imports 
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   //add 3 pages in here
    WelcomePage,
    LoginPage,
    SignupPage,
    LoggedinPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
