import { Component, ViewChild } from '@angular/core';
// 在import里添加了AlertController。
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // Add @ViewChild  username & password
  @ViewChild('username') uname;
  @ViewChild('password') password;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  } // 在constructor 里添加了 public alertCtrl: AlertController


  login() {
    console.log('Would sign in with ', this.uname.value, this.password.value);
    //console.log(this.uname.value, this.password.value);//Add console.log
    if(this.uname.value == "admin" && this.password.value == "admin") {}
    //Copy ionic document Components-Alerts-Basic Usage(警告弹窗)
    let alert = this.alertCtrl.create({  //下面是弹窗内容
      title: '😄  Login Successful !',
      subTitle: 'Happy Day !',
      buttons: ['OK']
    });
    alert.present(); 
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
