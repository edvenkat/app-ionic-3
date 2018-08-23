import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { RestaurantService } from '../../providers/restaurant-service';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search {
	restaurants: Array<any>;
	searchTerm: string = '';
	startIndex: any = 0;
	constructor(public navCtrl: NavController,
				public navParams: NavParams) {    
	}
	ionViewWillEnter() {  
		
	}
    getSongList() {
        this.navCtrl.push(ListPage);
    }
}