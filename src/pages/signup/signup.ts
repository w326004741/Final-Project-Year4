import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// Add import  AngularFireAuth
import { AngularFireAuth } from 'angularfire2/auth';


//import the TabsPage in here，导航并进入TabsPage
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  //Add 4个@ViewChild 值，该值出自html文件 e.g. #name
  //@ViewChild('name') name;
  //@ViewChild('email') email;
  //@ViewChild传入一个字符串username, 变量uname接收，其它不变。
  //@ViewChild传入一个字符串password, 变量password接收，其它不变。
  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  //弹窗提示
  alert(message: string){
    this.alertCtrl.create({
      title: '😄  Login Successful !',
         subTitle: message,
         buttons: ['OK']
    }).present();
  }


  signup(){       //registerUser()
    //Api connections
    //定向导航到TabsPage，要记住上面的import
    this.navCtrl.push(TabsPage);
    //写注册 登陆方法用邮箱
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value)
    .then(data => {
       console.log('got data', data);
       this.alert('Registered!');
     })
    .catch(error => {
       console.log('got an error', error);
       this.alert(error.message);
     });
    console.log('Would register user with ',this.uname.value, this.password.value);
    
  }

}
