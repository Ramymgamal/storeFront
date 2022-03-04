import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Admin/compononets/dashboard/dashboard.component';
import { ManageCatComponent } from './Admin/compononets/manage-cat/manage-cat.component';
import { ManageOrdersComponent } from './Admin/compononets/manage-orders/manage-orders.component';
import { ManageUsersComponent } from './Admin/compononets/manage-users/manage-users.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrderComponent } from './components/order/order.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFilterPipe } from './Pipes/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageCatComponent,
    ManageOrdersComponent,
    ManageUsersComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    ContactComponent,
    OrderComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
