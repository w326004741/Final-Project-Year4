import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoggedinPage } from '../loggedin/loggedin';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  email: string;

  tab1Root = LoggedinPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(private fire: AngularFireAuth) {
    this.email = fire.auth.currentUser.email;
  }
}
