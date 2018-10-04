import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class ProvinceService {
	constructor (private _http: Http) {

	}

	// getAll() {
	// 	return this._http.get(environment.APIServer +"/province/getAll")
	// 	.map(res => res.json());
	// }

	getList(countryID: any){
		return this._http.get(environment.APIServer +"/province/getList/" + countryID)
		.map(res => res.json());
	}

	addCountries(list: any){
		const body = JSON.stringify(list);
		const headers = new Headers({'content-Type': 'application/json;charset=UTF-8'});
		return this._http.post(environment.APIServer +'/countries/addList',body,{headers: headers})
		.map(res => res.json());
	}
}