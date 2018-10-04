import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'daterangepicker';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {ShopService} from '../shop.service';
import {Message} from '../../message/message.component';


declare var AdminLTE: any;
var _that = null;
@Component({
	selector: 'shop-component',
	templateUrl: './shop-list.component.html',
	styleUrls: ['./shop-list.component.css']
})

export class AdminShopListComponent implements OnInit {
	ShopList = [];
	message;
	constructor(private router: Router, private shopService: ShopService) {
		_that = this;
	}
	ngOnInit(){
		AdminLTE.init();
		this.loadPage();
		this.message = Message();
	}
	loadPage() {
		this.shopService.listOwnedShops(localStorage.getItem('adminID')).subscribe(result => {
			this.ShopList = result.list;
			console.log(this.ShopList);
		});
	}

	onSelete(f) {
		console.log(f);
		localStorage.setItem('shopID', f);
		setTimeout(function(){
			_that.router.navigate(['/admin/editShop']);
		},1000);
	}
	onDelete(shopID) {	
		if (confirm("Bạn có muốn xóa cửa hàng này?")) {
		this.shopService.deleteShop(shopID).subscribe(result =>{
			if(result.error == 0){
				console.log("delete successfully");
				this.loadPage();
			}else{
				console.log("delete unsuccesfully");
			}
		});
	}
	}
}
