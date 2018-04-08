import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import { AuthProvider} from '../../providers/auth/auth';
import { ViewChild } from '@angular/core/src/metadata/di';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController } from 'ionic-angular';


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

// @Injectable()
export class ResetpwdPage {
  email: string;
  position : string;

  constructor(public alertCtrl: AlertController,public toastCtrl: ToastController,private fire:AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
  }
  alert(message: string){
    this.alertCtrl.create({
      title: 'Dear User :😱',
         subTitle: 'Please enter the correct email!!! ',
         buttons: ['OK']
    }).present();
  }
  
  resetpassword(){
    this.fire.auth.sendPasswordResetEmail(this.email)
    .then(date => {
      console.log('send email');
      let toast = this.toastCtrl.create({
        message: 'Congratulations🎉!! Please check your email to change your new password.',
        duration: 3000,
        position: this.position
      });
      toast.present(toast);
    })
    .catch(error => {
      console.log('got an error', error);
      this.alert(error.message);
    });




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpwdPage');
  }

}
