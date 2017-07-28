import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  openSettingsPage() {
    this.navCtrl.push(SettingsPage)
  }
}
