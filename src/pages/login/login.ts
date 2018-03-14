import { Component, ViewChild } from '@angular/core';
// 在import里添加了AlertController。
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'; //copy form signup.ts
import { LoggedinPage } from '../loggedin/loggedin'; // add LoggedinPage.
import { TabsPage } from '../tabs/tabs';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // Add @ViewChild  username & password
  @ViewChild('username') uname;
  @ViewChild('password') password;


  constructor(public loadingCtrl: LoadingController,private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  } // 在constructor 里添加了 public alertCtrl: AlertController, private fire:AngularFireAuth

  //登陆成功弹窗
  alert(message: string){
    this.alertCtrl.create({
      title: 'Dear User : 🎉',
         subTitle: message,
         buttons: ['OK']
    }).present();
  }
  alert1(message: string){
    this.alertCtrl.create({
      title: 'Dear User :😱',
         subTitle: message,
         buttons: ['OK']
    }).present();
  }

  login() {   //  Add login function 方法 
    // firebase.auth.Auth.signInWithEmailAndPassword(email: string, password: string): Promise<any>
    // this.uname.value => username(email)当前用户的帐号，this.password.value => 当前用户的密码，直接用this.引用了。
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser); //在console传出当前账号用户的信息.
      this.alert('Success! You are logged in');   //套用当前文件的alert()function中的message,弹窗信息.
      this.navCtrl.setRoot( TabsPage ); // 定向导航到LoggedinPage,且不可返回。如想要返回: 改用navCtrl.push()
      // 设置当前导航堆栈的根目录.可以把LoggedinPage更改为播放器主界面.
      // setRoot(): 只是view之间的切换，不带有任何返回button之类的东西。 不能返回的
      // user is logged in
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 500
      });
      loader.present();
    })
    .catch( error => {
      console.log('got an error', error); // if登录信息不匹配，then 在这里报错，并弹出alert信息.error 信息自动生成。
      this.alert1(error.message); // email error: message: "The email address is badly formatted."
                                // password error: message: "The password is invalid or the user does not have a password"
      
    })
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
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
