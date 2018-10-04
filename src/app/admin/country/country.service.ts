import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class CountryService {
	constructor (private _http: Http) {

	}

	getAll() {
		return this._http.get(environment.APIServer +"/country/getAll")
		.map(res => res.json());
	}

	getList(){
		return this._http.get(environment.APIServer +"/country/getList")
		.map(res => res.json());
	}

	addCountries(list: any){
		const body = JSON.stringify(list);
		const headers = new Headers({'content-Type': 'application/json;charset=UTF-8'});
		return this._http.post(environment.APIServer +'/countries/addList',body,{headers: headers})
		.map(res => res.json());
	}
}