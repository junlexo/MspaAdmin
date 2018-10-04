import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'daterangepicker';
import { } from 'bootstrap';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {ShopService} from '../shop.service';
import {Message} from '../../message/message.component';

declare var AdminLTE: any;
var _that = null;
var	shopId: any;

@Component({
	selector: 'shop-component',
	templateUrl: './shop-edit.component.html',
	styleUrls: ['./shop-edit.component.css']
})

export class AdminShopEditComponent implements OnInit {
	message;
	shop: any;
	saveSuccess: boolean;
	error: number;
	constructor(private router: Router, private shopService: ShopService){
		this.saveSuccess = false;
		this.error = 0;
		_that = this;
		shopId = localStorage.getItem('shopId');
		// localStorage.removeItem('shopId');
	}

	ngOnInit(){
		AdminLTE.init();
		this.loadPage();
		this.message = Message();
	}

	loadPage() {
		this.shopService.findShop({id: shopId}).subscribe(result => {
			this.shop = result.shop;
		});
	}

	onSubmit(f){
		let shopInfo = {
			id: shopId,
			shop_name: f.value.shop_name,
			address: f.value.address,
			service_type: f.value.service_type,
			district: f.value.district,
			province: f.value.province,
			country: f.value.country,
			detail_direction: f.value.detail_direction,
			phone: f.value.phone,
			email: f.value.email,
			website: f.value.website,
			brief_information: f.value.brief_information,
			user_id: localStorage.getItem('userId')
		};
		console.log(shopInfo);
		this.shopService.editShop(shopInfo).subscribe(
			res =>{
				this.error = res.error;
				if(this.error == 0){
					this.saveSuccess = true;
					setTimeout(function(){
						_that.router.navigate(['/admin/shopList']);
					},1000);
				}else{
					this.saveSuccess = false;
				}
			}
			);
	}
}