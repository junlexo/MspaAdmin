import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class TreatmentTypeService {
	constructor(private _http: Http) {

	}

	addTreatT(TreatT: any)
	{
		const body = JSON.stringify(TreatT);
		const headers = new Headers();     
		headers.append('Content-Type', 'application/json;charset=UTF-8');	     	                         
		return this._http.post(environment.APIServer + '/TreatMentType/add', body, {headers: headers})
	       .map( response => {								 
			return response.json();
		});
	}
	listAll() {
		return this._http.get(environment.APIServer +"/TreatMentType/listAll")
				   .map(res => res.json());
	}
	removeTreatT(id){
	  	return this._http.delete(environment.APIServer +"/TreatMentType/delete/"+id)
					   .map(res => res.json());	
	}
	getTreatTId(id){
  		return this._http.get(environment.APIServer + "/TreatMentType/view/"+id)
				   .map(res => res.json());
  	}
  	updateTreatT(TreatT: any){
		const body = JSON.stringify(TreatT);
	    const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8' });
	    return this._http.post(environment.APIServer +'/TreatMentType/update', body, {headers: headers})
	               .map( response => {								 
									 return response.json();
								 });
	}
}