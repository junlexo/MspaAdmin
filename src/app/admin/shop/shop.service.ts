import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class ShopService {
	constructor (private _http: Http) {

	}

	listAll() {
		return this._http.get(environment.APIServer +"/shop/all")
		.map(res => res.json());
	}

	listOwnedShops(userId: any){
		// const body = JSON.stringify(userId);
		// const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8' });
		// return this._http.post(environment.APIServer +"/shop/list",body,{headers: headers})
		// .map(res => res.json());
		return this._http.get(environment.APIServer +"/shop/belongsto/"+userId)
		.map(res => res.json());
	}

	addShop(shop: any){
		const body = JSON.stringify(shop);
		const headers = new Headers({'content-Type': 'application/json;charset=UTF-8'});
		return this._http.post(environment.APIServer +'/shop/add',body,{headers: headers})
		.map(res => res.json());
	}

	addShopPhoto(photo: any){
		return this._http.post(environment.APIServer +'/shop/addPhoto',photo)
		.map(res => res.json());
	}

	getShopPhotos(shopID: any){
		return this._http.get(environment.APIServer +"/shop/shopPhotos/"+shopID)
		.map(res => res.json());
	}

	editShop(shop: any){
		const body = JSON.stringify(shop);
		const headers = new Headers({'content-Type': 'application/json;charset=UTF-8'});
		return this._http.post(environment.APIServer + '/shop/edit',body,{headers: headers})
		.map(res => res.json());
	}


	findShop(shopId: any){
		// const body = JSON.stringify(shopId);
		// const headers = new Headers({'content-Type': 'application/json;charset=UTF-8'});
		// return this._http.post(environment.APIServer + '/shopinfo/find',body,{headers: headers})
		// .map(res => res.json());
		return this._http.get(environment.APIServer + "/shop/find/"+shopId)
				   .map(res => res.json())
	}
	deleteShop(shopId: any){
		return this._http.delete(environment.APIServer +"/shop/delete/"+shopId)
		.map(res => res.json());
		// const body = JSON.stringify(shopId);
		// const headers = new Headers({'content-Type': 'application/json;charset=UTF-8'});
		// //headers.set("Access-Control-Allow-Origin", "*");
		// return this._http.post(environment.APIServer + '/shopinfo/delete',body,{headers: headers})
		// .map(res => res.json());
	}
}