import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'daterangepicker';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import { ShopService } from '../shop.service';
import {Message} from '../../message/message.component';


declare var AdminLTE: any;

@Component({
  selector: 'shop-component',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})

export class AdminShopListComponent implements OnInit {
	ShopList = [];
	message;
	constructor(private shopService: ShopService) {
		
	}
	ngOnInit(){
		AdminLTE.init();
		this.loadPage();
	 	this.message = Message();
	}
	loadPage() {
		this.shopService.listAll().subscribe(result => {
			this.ShopList = result.list;
		});
	}
}
