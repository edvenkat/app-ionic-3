import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http,Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

/*
  Generated class for the RestaurantService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WebService {
  
  constructor(public http: Http,public platform: Platform) {
  }
  

  getHomePageContent(): Observable<any> {
    console.log("get home page content came");
    let url = 'https://developers.zomato.com/api/v2.1/search';
    let query = '';    
    //let query = '?entity_type=city&entity_id='+localStorage.getItem("cityId")+'&start='+startIndex+'&count=10'+searchString;    
    
    //
    var response = this.http.get(url + query)
    .map((res : Response) => res.json())

    return response;
  
  }

  getRestaurantBySearch(filter:any,startIndex:String): Observable<any> {
   // https://developers.zomato.com/api/v2.1/search?q=T%20nagar
    
    var searchString = "";
    console.log(filter)
    if((filter.hasOwnProperty("collection_id") ? true : false)) {
        searchString = "&collection_id="+filter["collection_id"];
    }
    if((filter.hasOwnProperty("establishment_type") ? true : false)) {
        searchString = "&establishment_type="+filter["establishment_type"];
    }
    
    
    let url = 'https://developers.zomato.com/api/v2.1/search';
    let query = '?entity_type=city&entity_id='+localStorage.getItem("cityId")+'&start='+startIndex+'&count=10'+searchString;    

     let opt: RequestOptions
     var headers = new Headers();
     headers.append('Accept', 'application/json ');
     headers.append('user-key', 'b1d0e4b57caefbdf2992987044c48c07');
     opt = new RequestOptions({
        headers: headers
     })
    
     //
     var response = this.http.get(url + query,opt)
     .map((res : Response) => res.json())

    return response;
  
  }

}
