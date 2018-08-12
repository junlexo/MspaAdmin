import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'daterangepicker';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import { EmployeeGroupService } from '../employee-group.service';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;
var _that = null;
@Component({
  selector: 'employee-group-list',
  templateUrl: './employee-group-list.component.html',
  styleUrls: ['./employee-group-list.component.css']
})
export class AdminEmployeeGroupListComponent implements OnInit {
  notFound: boolean;
  saveSuccess: boolean;
  Employee = [];
  constructor(private router: Router, private empGrService: EmployeeGroupService) { 
    this.notFound = false;
    _that = this;           
  }
  ngOnInit() {
     // Update the AdminLTE layouts
    AdminLTE.init();
    this.loadList();

  }
  loadList(){
    this.empGrService.listAll().subscribe(data => {
      if(data)
      {
        this.Employee = data.results;
      }
      else
        this.notFound = true;      
    },
    error => {
      console.log(error);
    });
  }
  removeEmpG(id){
    if (confirm("Bạn có muốn xóa?")) {
      this.empGrService.removeEmpGr(id).subscribe(resp => {
        if(!resp.error)
          this.loadList();
      });
    }   
  }
}
