import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from 'ng2-translate'

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('myNav') nav: NavController;
  rootPage:any = TabsPage;

  constructor(translate: TranslateService, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // set i18n the default language:
    translate.setDefaultLang('zh-cn');
  }

  ngOnInit() {
     // Let's navigate from TabsPage to Page1
     this.nav.push(HomePage);
  }
}
