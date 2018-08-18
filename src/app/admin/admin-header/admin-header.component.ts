import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import * as moment from 'moment';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  changeLanguage() {    
    if($("#language")[0].checked)
  	  localStorage.setItem("language", "en");
     else
       localStorage.setItem("language", "vn");
  	location.reload();
  }
}
