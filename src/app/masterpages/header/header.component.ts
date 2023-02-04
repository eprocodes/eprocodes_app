import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-header-page',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
	modal: any;
	@Input() pageTitle = ' ';
	@Input() hideBackButton = false;

	constructor(
		// public navCtrl: NavController
		) {}

	ngOnInit() {}

	goTo(nextPage) {
		// if (nextPage === 'HomepageComponent') {
		// 	this.navCtrl.push(HomepageComponent);
		// }
	}
}
