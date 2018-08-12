import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'daterangepicker';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import {Router, ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';
import { EmployeeGroupService } from '../employee-group.service';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;
var _that = null;
@Component({
  selector: 'employee-group-add',
  templateUrl: './employee-group-add.component.html',
  styleUrls: ['./employee-group-add.component.css']
})
export class AdminEmployeeGroupAddComponent implements OnInit {
  error: number;
  saveSuccess: boolean;
  sub: string;
  singleEmpr = {};
  notFound: boolean;
  isAdd: boolean;
  constructor(private router: Router, private empGrService: EmployeeGroupService, private _routeParams: ActivatedRoute) { 
    this.error = 0;
    _that = this;    
  }
  ngOnInit() {
     // Update the AdminLTE layouts
    AdminLTE.init();
    this._routeParams.params.subscribe(params => {      
      let id = params['id'];               
      if(!id)
        this.isAdd = true;      
      else{
        this.isAdd = false;
      
        this.empGrService.getEmpGrId(id)
            .subscribe( json => {
              console.log(json);            
              if(!json.error)
              {              
                this.notFound = false;
                this.singleEmpr = json.results;              
              }
              else
                this.notFound = true;
        });
      }
    });

  }
  onSubmit(f) {
    if(this.isAdd)
      this.addEmpGr(f);
    else
      this.updateEmpGr(f);
  }
  addEmpGr(f) {    
    this.empGrService.addEmpGr({name: f.value.name, code: f.value.code}).subscribe(data => {
      this.error = data.error;
      if(!data.error)
      {
        this.saveSuccess = true;
        setTimeout(function(){
           _that.router.navigate(['/admin/groupEmployeeList']);
        },1000);
      }
      else
      {
        this.saveSuccess = false;
      }
    },
    error => {
      console.log(error);
    });
  }
  updateEmpGr(f) {        
    this.empGrService.updateEnpGr({name: $('#name').val(), code: $('#code').val()}).subscribe(data => {
      this.error = data.error;
      if(!data.error)
      {
        this.saveSuccess = true;
        setTimeout(function()
        {
           this.saveSuccess = false;
        },1000);
      }
      else
      {
        this.saveSuccess = false;
      }
    },
    error => {
      console.log(error);
    });
  }
  clear(f) {
    if(this.isAdd)
      $('#code').val("");
    $('#name').val("");
  }
}
