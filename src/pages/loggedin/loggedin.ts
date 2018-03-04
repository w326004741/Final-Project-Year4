import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  email: string; //这个email参数在html
  
  constructor(private fire: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
    this.email = fire.auth.currentUser.email;
  }
  // logout按钮， html 添加button
  logout() {
    // push():是异步的，带有过度效果，可以返回(有返回按钮)
    // setRoot():是一个view之间的切换，所以不带有任何返回button之类的东西，
    // this.nav.setRoot(page,params,opt);
    // 1、page 组件: 想放进导航的 组件名称 
    // 2、params 参数：像下一个页面传递参数 Object类型 
    // 3、过度完成。返回一个promise
    window.localStorage.removeItem(this.email);
    this.navCtrl.setRoot(WelcomePage);
    console.log(this.fire.auth.currentUser);
    //window.localStorage.removeItem('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

}
