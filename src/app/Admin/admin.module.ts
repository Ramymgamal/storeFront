import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCatComponent } from './compononets/manage-cat/manage-cat.component';
import { ManageOrdersComponent } from './compononets/manage-orders/manage-orders.component';
import { ManageUsersComponent } from './compononets/manage-users/manage-users.component';



@NgModule({
  declarations: [ManageCatComponent,ManageOrdersComponent,ManageUsersComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
