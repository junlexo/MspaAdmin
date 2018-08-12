import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminEmployeeGroupAddComponent } from './../employee-group/employee-group-add/employee-group-add.component';
import { AdminEmployeeGroupListComponent } from './../employee-group/employee-group-list/employee-group-list.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full'
          },
          {
            path: 'groupEmployee',
            component: AdminEmployeeGroupAddComponent
          },
          {
            path: 'groupEmployee/:id',
            component: AdminEmployeeGroupAddComponent
          },
          {
            path: 'groupEmployeeList',
            component: AdminEmployeeGroupListComponent
          },
          {
            path: 'dashboard1',
            component: AdminDashboard1Component
          },
          {
            path: 'dashboard2',
            component: AdminDashboard2Component
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { 
}
