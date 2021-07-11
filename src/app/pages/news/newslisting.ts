import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/HttpRequestServices';

@Component({
  selector: 'app-news-listing',
  templateUrl: 'newslisting.html',
  styleUrls: ['newslisting.scss']
})
export class NewsListing implements OnInit {

  constructor( public httpRequest: HttpRequestsService) {}
  NewsListing:any;

  ngOnInit() {
    this.getNews();
    this.getUsername();
  }

  getNews() {
    this.httpRequest.Get('getnews').subscribe(res => {
      if (res != null) {
        console.log(res);
        this.NewsListing = res;
      }
    },
      err => {
        console.error('this.getDocument error:', err);
        // this.loading = false;
      });
  }
  getUsername() {
    this.httpRequest.Get('getusername').subscribe(res => {
      if (res != null) {
        console.log(res);
      }
    },
      err => {
        console.error('this.getDocument error:', err);
        // this.loading = false;
      });
  }

}


