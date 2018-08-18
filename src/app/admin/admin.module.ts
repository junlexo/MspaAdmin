import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminEmployeeGroupAddComponent } from './employee-group/employee-group-add/employee-group-add.component';
import { AdminEmployeeGroupListComponent } from './employee-group/employee-group-list/employee-group-list.component';
import { AdminTreatmentTypeListComponent } from './treatment-type/treatment-type-list/treatment-type-list.component';
import { AdminTreatmentTypeAddComponent } from './treatment-type/treatment-type-add/treatment-type-add.component';
import { AdminShopListComponent } from './shop/shop-list/shop-list.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { EmployeeGroupService } from './employee-group/employee-group.service';
import { TreatmentTypeService } from './treatment-type/treatment-type.service';
import { ShopService } from './shop/shop.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminEmployeeGroupAddComponent,
    AdminEmployeeGroupListComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    AdminTreatmentTypeAddComponent,
    AdminTreatmentTypeListComponent,
    AdminShopListComponent
  ],
  providers: [EmployeeGroupService, TreatmentTypeService, ShopService],
  exports: [AdminComponent]
})
export class AdminModule { }
