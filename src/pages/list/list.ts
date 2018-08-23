import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetailsPage } from '../details/details';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  songList : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.songList = [{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  goToPage(pagename) {
        if(pagename=="details")
            this.navCtrl.push(DetailsPage);
    }

}
