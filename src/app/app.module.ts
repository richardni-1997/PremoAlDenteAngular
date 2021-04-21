import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AddOrderComponent } from './components/order/add-order/add-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule }  from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { CustomerEditComponent } from './components/customer/edit-customer/edit-customer.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CustomerComponent,
    ProductComponent,
    OrderComponent,
    ReportsComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    AddOrderComponent,
    AddCustomerComponent,
    CustomerEditComponent,
    EditOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatRippleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
