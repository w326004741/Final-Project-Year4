import { Component, ViewChild } from '@angular/core';
// 在import里添加了AlertController。
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'; //copy form signup.ts
import { LoggedinPage } from '../loggedin/loggedin'; // add LoggedinPage.


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // Add @ViewChild  username & password
  @ViewChild('username') uname;
  @ViewChild('password') password;


  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  } // 在constructor 里添加了 public alertCtrl: AlertController, private fire:AngularFireAuth

  //登陆成功弹窗
  alert(message: string){
    this.alertCtrl.create({
      title: 'Dear User :😊',
         subTitle: message,
         buttons: ['OK']
    }).present();
  }

  login() {   //  Add 方法
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser); //传出当前账号用户的信息.
      this.alert('Success! You are logged in');   //弹窗信息.
      this.navCtrl.setRoot( LoggedinPage ); // 设置当前导航堆栈的根目录.可以把LoggedinPage更改为播放器主界面.
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })

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
  }
  // logout() {
  //   this.fire.auth.signOut();
  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
