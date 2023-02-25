import { Component } from '@angular/core';
import { HttpRequestsService } from '../services/HttpRequestServices';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor( public httpRequest: HttpRequestsService) {}
  projects:any;


  ngOnInit() {
    this.getProjects();
  }


  getProjects() {
    this.httpRequest.Get('getProjects').subscribe(res => {
      if (res != null) {
        console.log(res);
        this.projects = res;
      }
    },
      err => {
        console.error('this.getDocument error:', err);
        // this.loading = false;
      });
  }
}
