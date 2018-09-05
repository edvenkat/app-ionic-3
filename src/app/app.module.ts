import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { ListPage } from '../pages/list/list';
import { Search } from '../pages/search/search';

import { HttpModule } from '@angular/http';
import { WebService } from '../providers/web-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    ListPage,
    Search
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    ListPage,
    Search
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WebService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
