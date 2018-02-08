//在Componet后添加 ViewChild
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import 3 Pages in here
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ResetpwdPage } from '../resetpwd/resetpwd';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
      

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  
   //定向导航到LoginPage，要记住上面的import
  login(){
    this.navCtrl.push(LoginPage);
  }
  signup(){
    //定向导航到SignupPage，要记住上面的import
    // {animate:false}的作用是加快页面转化的速度，能够immediately的出现
    //if()
    this.navCtrl.push(SignupPage,{}, {animate:false});
  }
  //reset password page
  resetpwd(){
    this.navCtrl.push(ResetpwdPage);
  }
}
