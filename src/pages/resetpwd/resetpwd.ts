import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import { AuthProvider} from '../../providers/auth/auth';
import { ViewChild } from '@angular/core/src/metadata/di';
// import { FirebaseApp } from 'angularfire2';
// import firebase from 'firebase/app';
//import { AuthProvider} from '../../providers/auth/auth'
//import { FormGroup, FormBuilder, Validators} from '@angular/forms';

/**
 * Generated class for the ResetpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpwd',
  templateUrl: 'resetpwd.html',
})
export class ResetpwdPage {
// @ViewChild('username') uname;
// @ViewChild('resetpassword') resetpwd;
// @ViewChild('checkpassword') checkpassword;
email: string; //这个email参数在html
  constructor(private fire:AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
    this.email = fire.auth.currentUser.email;
  }
  //var auth = firebase.auth();
  
  resetpassword() {
    
    // this.fire.auth.sendPasswordResetEmail(this.email)
    // .then( date => {
    //   console.log('got some data', this.fire.auth.verifyPasswordResetCode);
    // }).catch(error => {
    //   console.log('got an error', error)
    // });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpwdPage');
  }

}
