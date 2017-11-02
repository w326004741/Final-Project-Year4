import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    //Api connections
    //定向导航到TabsPage，要记住上面的import
    this.navCtrl.push(TabsPage);
    //写注册 登陆方法用邮箱
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value)
    .then(data => {
       console.log('got data', data);
     })
    .catch(error => {
       console.log('got an error', error);
     });
    console.log('Would register user with ',this.uname.value, this.password.value);
    
  }

}
