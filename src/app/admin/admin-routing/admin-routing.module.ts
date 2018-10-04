import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminEmployeeGroupAddComponent } from './../employee-group/employee-group-add/employee-group-add.component';
import { AdminEmployeeGroupListComponent } from './../employee-group/employee-group-list/employee-group-list.component';
import { AdminTreatmentTypeAddComponent } from './../treatment-type/treatment-type-add/treatment-type-add.component';
import { AdminTreatmentTypeListComponent } from './../treatment-type/treatment-type-list/treatment-type-list.component';
import { AdminShopListComponent } from './../shop/shop-list/shop-list.component';
import { AdminShopAddComponent } from './../shop/shop-add/shop-add.component';
import { AdminShopEditComponent } from './../shop/shop-edit/shop-edit.component';
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
            path: 'treatmentType',
            component: AdminTreatmentTypeAddComponent
          },
          {
            path: 'treatmentType/:id',
            component: AdminTreatmentTypeAddComponent
          },
          {
            path: 'treatmentTypeList',
            component: AdminTreatmentTypeListComponent
          },
          {
             path: 'shopList',
             component: AdminShopListComponent
          },
          {
             path: 'shop',
             component: AdminShopAddComponent
          },
          {
             path: 'shop/:id',
             component: AdminShopAddComponent
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
