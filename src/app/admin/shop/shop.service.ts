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
		return this._http.get(environment.APIServer +"/shopinfo/list")
				   .map(res => res.json());
	}
}