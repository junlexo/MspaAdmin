import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { AdminLoginComponent } from './../view/login/login.component';
import { AdminRegisterComponent } from './../view/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListUserComponent } from './../view/list/list.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent },
      { path: 'login', component: AdminLoginComponent },
      { path: 'register', component: AdminRegisterComponent },
      { path: 'list', component: ListUserComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
