import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { AddOrderComponent } from './components/order/add-order/add-order.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerEditComponent } from './components/customer/edit-customer/edit-customer.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeComponent},
  {path: 'employees/add', component: AddEmployeeComponent},
  {path: 'employees/:id', component: UpdateEmployeeComponent},
  { path: 'orders', component: OrderComponent }, 
  { path: 'orders/reports', component: ReportsComponent },
  { path: 'orders/add', component: AddOrderComponent },
  { path: 'orders/:orderId', component: EditOrderComponent },
  {path: 'customers/add', component: AddCustomerComponent},
  {path: 'customers/:customerId', component: CustomerEditComponent},
  {path: 'customers', component: CustomerComponent},
  {path: 'product', component: ProductComponent},
  {path: 'reports', component: ReportsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
