import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import WelcomePage in here.
import { WelcomePage } from '../welcome/welcome';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  //logout 功能
  logout(){
    //定向导航到WelcomePage，要记住上面的import
    this.navCtrl.push(WelcomePage);
  }
}
