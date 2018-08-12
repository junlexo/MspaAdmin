import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class EmployeeGroupService {
	constructor(private _http: Http) {

	}

	addEmpGr(EmpGr: any)
	{
		const body = JSON.stringify(EmpGr);
		const headers = new Headers();     
		headers.append('Content-Type', 'application/json;charset=UTF-8');	     	                         
		return this._http.post(environment.APIServer + '/GroupEmployees/add', body, {headers: headers})
	       .map( response => {								 
			return response.json();
		});
	}
	listAll() {
		return this._http.get(environment.APIServer +"/GroupEmployees/listAll")
				   .map(res => res.json());
	}
	removeEmpGr(id){
	  	return this._http.delete(environment.APIServer +"/GroupEmployees/delete/"+id)
					   .map(res => res.json());	
	}
	getEmpGrId(id){
  		return this._http.get(environment.APIServer + "/GroupEmployees/view/"+id)
				   .map(res => res.json());
  	}
  	updateEnpGr(EmpGr: any){
		const body = JSON.stringify(EmpGr);
	    const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8' });
	    return this._http.post(environment.APIServer +'/GroupEmployees/update', body, {headers: headers})
	               .map( response => {								 
									 return response.json();
								 });
	}
}