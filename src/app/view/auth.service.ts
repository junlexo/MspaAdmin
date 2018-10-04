import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {
	authenticated: boolean = false;
	constructor(private _http: Http) {

	}

	signIn(user: any) {
	const body = JSON.stringify(user);
	const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8' });
	return this._http.post(environment.APIServer +'/admin/signin', body, {headers: headers})
	           .map( response => {
								 if(response) {
									 this.authenticated = true;
								 }
								 return response.json();
							 })
  	}
  register(user: any)
  {
  	const body = JSON.stringify(user);
     const headers = new Headers();     
     	headers.append('Content-Type', 'application/json;charset=UTF-8');	     	                         
    return this._http.post(environment.APIServer + '/admin/register', body, {headers: headers})
               .map( response => {								 
								 return response.json();
							 });
  }
  getUserId(id){
  	return this._http.get(environment.APIServer +"/admin/single/"+id)
				   .map(res => res.json());
  }

  getUser(){
  	return this._http.get(environment.APIServer +"/admin/all")
				   .map(res => res.json());
  }
  removeUser(username){
	  	return this._http.get(environment.APIServer +"/admin/remove/"+username)
					   .map(res => res.json());	
	}
	changeAcount(user: any){
		const body = JSON.stringify(user);
	    const headers = new Headers({'Content-Type': 'application/json' });
	    return this._http.post(environment.APIServer +'/admin/update', body, {headers: headers})
	               .map( response => {								 
									 return response.json();
								 });
	}
	isAuthenticated() {
    return this.authenticated || localStorage.getItem('token');
  }

	logOut() {
		localStorage.clear();
		this.authenticated = false;
	}
}