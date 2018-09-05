import { Component, ViewChild  } from '@angular/core';
import { NavController, Platform, Slides, Events, FabContainer, Content  } from 'ionic-angular';


import { DetailsPage } from '../details/details';
import { ListPage } from '../list/list';
import { Search } from '../search/search';

import { WebService } from '../../providers/web-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('mySliderH') sliderh : Slides;
    @ViewChild('mySliderC') sliderc : Slides;
    @ViewChild(Content) content: Content;
    selectedSegment: any;
    slidersHeader: any;
    slidersContent: any;
    imageUrls: any;
    showRightButton = true;
    showLeftButton = true;
    fabMenuActive = false;
    inifinteScrollForSlide1 = true;
    inifinteScrollForSlide2 = false;
    ngAfterViewInit() {
         this.sliderc.autoHeight = true;
     }
    

    constructor(public navCtrl: NavController,public events: Events,public webService: WebService) {
	  platform.ready().then(() => {
		//this.createBanner();
		//this.showInterstitial();
        this.webService.getHomePageContent()
    });
        this.events.subscribe('slidechange:tabSelected', eventData => { 
            const selectedIndex = this.slidersHeader.findIndex((slide) => {
                return slide.id === eventData;
            });
            this.sliderc.slideTo(selectedIndex);
            this.sliderh.slideTo(selectedIndex);
        });
        this.selectedSegment = { id: 1, title: "title 1"};
        this.imageUrls = [
            {"url":"assets/imgs/banner_04.jpg"},
            {"url":"assets/imgs/bjork-live.jpg"},
            {"url":"assets/imgs/card-saopaolo.png"}
        ];

        this.slidersHeader = [
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
            
        ]
        /*
        ,
            {
                id: 6,
                title: "title 6"
            },
            {
                id: 7,
                title: "title 7"
            },
            {
                id: 8,
                title: "title 8"
            },
            {
                id: 9,
                title: "title 9"
            },
            {
                id: 10,
                title: "title 10"
            }
        ];
*/
        this.slidersContent = [
            {"sliderId":1,"sliderName":"Latest Poster","list":[{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"}]},
            
            {"sliderId":2,"sliderName":"Actor","list":[{"name":"Actor 1"},{"name":"Actor 2"},{"name":"Actor 3"},{"name":"Actor 1"},{"name":"Actor 2"},{"name":"Actor 3"},{"name":"Actor 1"},{"name":"Actor 2"},{"name":"Actor 3"},{"name":"Actor 1"},{"name":"Actor 2"},{"name":"Actor 3"},{"name":"Actor 1"},{"name":"Actor 2"},{"name":"Actor 3"},{"name":"Actor 1"},{"name":"Actor 2"},{"name":"Actor 3"},{"name":"Actor 1"},{"name":"Actor 2"},{"name":"Actor 3"},{"name":"Actor 1"},{"name":"Actor 2"},{"name":"Actor 3"}]},
            
            
            {"sliderId":3,"sliderName":"Actress","list":[{"name":"Actress 1"},{"name":"Actress 2"},{"name":"Actress 3"}]},
            
            {"sliderId":4,"sliderName":"Movie","list":[{"name":"Movie 1"},{"name":"Movie 2"},{"name":"Movie 3"}]},
            
            {"sliderId":5,"sliderName":"Music","list":[{"name":"Music 1"},{"name":"Music 2"},{"name":"Music 3"}]},
        ];
    }
    
    goToPage(pagename) {
        if(pagename=="details")
            this.navCtrl.push(DetailsPage);
        if(pagename=="list")
            this.navCtrl.push(ListPage);
    }
    getSearch(fab: FabContainer) {
        fab.close();
        this.fabMenuActive = false;
        this.navCtrl.push(Search);
    }
    fabMenuToggle() {
        console.log("came");
        this.fabMenuActive = !this.fabMenuActive;
    }
    claseFabMenu(fab: FabContainer) {
        fab.close();
         this.fabMenuActive = !this.fabMenuActive;
    }
    redirectionPage(pageName:String,fab: FabContainer) {
         console.log("page redirection");
        fab.close();
    }
    scrollToTop(slider) {
        this.content.scrollToTop();
        console.log("slide"+slider.getActiveIndex())
        if(slider.getActiveIndex()==1) {
            this.inifinteScrollForSlide1 = true;
            this.inifinteScrollForSlide2 = false;
        } else if(slider.getActiveIndex()==2) {
            this.inifinteScrollForSlide1 = false;
            this.inifinteScrollForSlide2 = true;
        } else {
            this.inifinteScrollForSlide1 = false;
            this.inifinteScrollForSlide2 = false;
        }
      }
    
    getTest1(infiniteScroll?: any) {
        console.log("------------------- Test 1 called ------------------");
        var test=[{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"},{"songTitle":"test  – test test test in test","songCreated":"test test, test test, test test, test, test test 19, 2018","songImage":"assets/imgs/bjork-live.jpg","songView":"10","songComments":"30"}];
        /*
        for(let i=0;i<test.length;i++) {
            this.slidersContent[0].list.push(test[i]);
        }
        */
        if(infiniteScroll) {
            setTimeout(function(){
                infiniteScroll.complete();
            },2000);
        }
    }
    getTest2(infiniteScroll?: any) {
         if(infiniteScroll) {
            setTimeout(function(){
                infiniteScroll.complete();
            },2000);
        }
        console.log("------------------- Test 2 called ------------------");
    }
	
    onHeaderSlideChanged(slider) {
       //const currentSlide = this.slidersContent[slider.getActiveIndex()];
      // this.selectedSegment = currentSlide.id;
       //this.sliderc.slideTo(currentSlide);
    }
    
    onContentSlideChanged(slider) {
        const currentSlide = this.slidersHeader[slider.getActiveIndex()];
        if(typeof(currentSlide)!="undefined") {
            this.selectedSegment = currentSlide;
            this.sliderh.slideTo(slider.getActiveIndex());
            //this.content.scrollToTop();
        }
        
    }
    
    onSegmentChanged(segmentButton) {
        const selectedIndex = this.slidersContent.findIndex((slide) => {
            return slide.sliderId === segmentButton.id;
        });
        this.sliderc.slideTo(selectedIndex);
    }
    
    slideNext() {
         this.sliderh.slideNext();
    }
    
    slidePrev() {
         this.sliderh.slidePrev();
    }
    resSearch() {
        this.navCtrl.push(DetailsPage);
    }
   
}
