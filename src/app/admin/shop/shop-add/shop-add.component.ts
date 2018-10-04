import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'daterangepicker';
import { } from 'bootstrap';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import {Router, ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {ShopService} from '../shop.service';
import {CountryService} from '../../country/country.service';
import {ProvinceService} from '../../province/province.service';
import {ServiceTypeService} from '../../service_type/service_type.service';
import {Message} from '../../message/message.component';

declare var AdminLTE: any;
var _that = null;
@Component({
	selector: 'shop-component',
	templateUrl: './shop-add.component.html',
	styleUrls: ['./shop-add.component.css']
})

export class AdminShopAddComponent implements OnInit {
	message: any;
	isRegistered: boolean = false;
	saveSuccess: boolean = false;
	error: number = 0;
	formSubmit: boolean = false;
	selectedFiles = [];
	countries = [];
	provinces = [];
	shop_services = [];
	shop = {"shop_photo":"","countryID":""};
	disLeftBtn: boolean = true;
	disRightBtn: boolean = false;
	photos = [];
	photosCount: number = 0;
	fd = new FormData();
	constructor(private router: Router, private shopService: ShopService,
		private countryService: CountryService,  private provinceService: ProvinceService, 
		private serviceType: ServiceTypeService,
		private _routeParam: ActivatedRoute){
		_that = this; 
		this.countryService.getList().subscribe(result => {
			if(result.error == 0){
				this.countries = result.countries;
				console.log(this.countries);
			}
		});

		this.serviceType.getAll().subscribe(result => {
			if(result.error == 0){
				this.shop_services = result.services;
			}
		});
	}

	ngOnInit(){
		AdminLTE.init();
		this.message = Message();
		this._routeParam.params.subscribe(param =>{
			let id = param['id'];
			if(!id){
				this.isRegistered = true;
				this.saveSuccess = false;
			}else{
				this.isRegistered = false;
				this.saveSuccess = true;
				this.shopService.findShop(id).subscribe(result => {
					if(result.error == 0){
						// this.getProvinces(result.shop.countryID);
						this.shop = result.shop;
						console.log(this.shop);
						this.shopService.getShopPhotos(id).subscribe(result => {
							if(result.error == null){
								result.photos.forEach(photo => {
									this.photos.push(environment.APIServer + this.shop.shop_photo + photo);
								});
								this.getProvinces(this.shop.countryID);
							}
						});
					}
				});
			}
		});

	}

	selectFiles(event: any){
		this.selectedFiles = event.target.files;
		for (var i = 0; i < this.selectedFiles.length; i++) {
			this.fd.append('shopPhotos', this.selectedFiles[i], this.selectedFiles[i].name);	
		}
		// console.log(this.fd.getAll('shopPhotos'));
	}

	onUpdatePhoto(f){
		this.shopService.addShopPhoto(this.fd).subscribe(res => {
			this.error = res.error;
			if(this.error == 0){
				setTimeout(function(){
					_that.router.navigate(['/admin/shopList']);
				},1000);
			}else{

			}
		});
	}

	getProvinces(countryID: any){
		this.provinceService.getList(countryID).subscribe(result =>{
			if(result.error == 0){
				this.provinces = result.provinces;
				console.log(this.provinces);
			}
		});
	}

	onSubmit(f){
		if(this.formSubmit == false){
			let shopInfo = {
				shop_name: f.value.shop_name,
				shop_addr: f.value.address,
				//service_type: f.value.service_type,
				//district: f.value.district,
				provinceID: f.value.provinceID,
				countryID: f.value.countryID,
				//detail_direction: f.value.detail_direction,
				//phone: f.value.phone,
				//email: f.value.email,
				shop_website: f.value.website,
				shop_desc: f.value.shop_desc,
				serviceID: f.value.serviceID,
				//files : f.value.files,
				adminID: localStorage.getItem('adminID')
			};
			console.log(shopInfo);
			// this.fd.append('shop_name', f.value.shop_name);
			// this.fd.append('shop_addr', f.value.address);
			// this.fd.append('provinceID', f.value.provinceID);
			// this.fd.append('countryID', f.value.countryID);
			// this.fd.append('shop_website', f.value.website);
			// this.fd.append('shop_desc', f.value.shop_desc);
			// this.fd.append('serviceID', f.value.serviceID);
			// this.fd.append('adminID', localStorage.getItem('adminID'));

			// console.log(this.fd.get('shop_name'));
			// console.log(this.fd.get('shop_addr'));
			// console.log(this.fd.get('provinceID'));
			// console.log(this.fd.get('countryID'));
			// console.log(this.fd.get('shop_website'));
			// console.log(this.fd.get('shop_desc'));
			// console.log(this.fd.get('serviceID'));
			// console.log(this.fd.get('adminID'));
			// console.log(this.fd.getAll('shopPhotos'));
			this.shopService.addShop(shopInfo).subscribe(
				res =>{
					if(res){
						this.error = res.error;
						if(this.error == 0){
							this.saveSuccess = true;
						}else{
							this.saveSuccess = false;
						}
					}
				}
				);
		}else{
			this.shopService.addShopPhoto(this.fd).subscribe(res => {
				this.error = res.error;
				if(this.error == 0){
					setTimeout(function(){
						_that.router.navigate(['/admin/shopList']);
					},1000);
				}else{

				}
			});
		}
		this.formSubmit = !this.formSubmit;
	}

	onChangePhoto(index){
		this.photosCount = this.photosCount + index;
		//console.log(this.photos.length);
		if(this.photosCount <= 0){
			this.disLeftBtn = true;
			// $("#leftBtn").disableSelection();
		}else if(this.photosCount >= this.photos.length -1){
			this.disRightBtn = true;
			// $("#rightBtn").disableSelection();
		}else{
			this.disLeftBtn = false;
			this.disRightBtn = false;
		}
	}
}