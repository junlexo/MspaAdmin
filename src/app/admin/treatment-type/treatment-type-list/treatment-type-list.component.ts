import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'daterangepicker';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import { TreatmentTypeService } from '../treatment-type.service';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;
var _that = null;
@Component({
  selector: 'treatment-type-list',
  templateUrl: './treatment-type-list.component.html',
  styleUrls: ['./treatment-type-list.component.css']
})
export class AdminTreatmentTypeListComponent implements OnInit {
  notFound: boolean;
  saveSuccess: boolean;
  Employee = [];
  constructor(private router: Router, private treatmentService: TreatmentTypeService) { 
    this.notFound = false;
    _that = this;           
  }
  ngOnInit() {
     // Update the AdminLTE layouts
    AdminLTE.init();
    this.loadList();

  }
  loadList(){
    this.treatmentService.listAll().subscribe(data => {
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
      this.treatmentService.removeTreatT(id).subscribe(resp => {
        if(!resp.error)
          this.loadList();
      });
    }   
  }
}
