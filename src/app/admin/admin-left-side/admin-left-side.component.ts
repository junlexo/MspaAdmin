import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../view/auth.service';
@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {
	currentUser: string;
  constructor(private _authService: AuthService) { }

  ngOnInit() {  	
  	this._authService.getUserId(localStorage.getItem('adminID')).subscribe(
          data => {          
            this.currentUser = data.admin.ad_username;
          },
          error => {
            console.error(error);
          }
        );;  	
  }

}
