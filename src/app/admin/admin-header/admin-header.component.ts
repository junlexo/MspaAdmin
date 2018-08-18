import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {Message} from '../message/message.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  language: boolean;
  message;
  constructor(private router: Router) {    
  }

  ngOnInit() {   
    this.message = Message();
    switch (localStorage.getItem("language")) {
      case "en":
        this.language = true;
        break;
      case "vn":
        this.language = false;
        break;
      default:
        // code...
        break;
    }    
  }
  changeLanguage(isEng) {        
  	localStorage.setItem("language", isEng);               
    location.reload();
  }
}
