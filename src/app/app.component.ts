import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { HomePage } from '../pages/home/home';
import { AddEntryPage } from '../pages/add_entry/add_entry';
import {createTranslateLoader} from "./app.module";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, translate: TranslateService) {
    this.initializeApp();

    //setting user interface locale
    var userLang = navigator.language.split('-')[0];
    userLang = /(en|pl)/gi.test(userLang) ? userLang : 'en';
    translate.setDefaultLang(userLang);
    translate.use(userLang);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Add entry', component: AddEntryPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      console.log('LANG: ' + navigator.language.split('-')[0]);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
