import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Slides, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { DetailsPage } from '../pages/details/details';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav : Nav;
  
  rootPage:any = HomePage;
  //pages :Array<{pageTitle: string,pageComponent:any}>;
  pages :Array<{id: number,title:any}>;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    /*
    this.pages = [
        {'pageTitle':'Home Page',"pageComponent":HomePage},
        {'pageTitle':'Details Page',"pageComponent":DetailsPage}
    ];
    */
    this.pages = [
            {
                id: 1,
                title: "title 1"
            },
            {
                id: 2,
                title: "title 2"
            },
            {
                id: 3,
                title: "title 3"
            },
            {
                id: 4,
                title: "title 4"
            },
            {
                id: 5,
                title: "title 5"
            }
            
        ];
  }
  openPage(page) {
    //this.sliderc.slideTo(page);
    //HomePage.sliderChangeFromAppComponent(page);
     this.events.publish('slidechange:tabSelected', page);
    //this.nav.setRoot(page.pageComponent)
  }
  
}

