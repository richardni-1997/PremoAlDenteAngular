import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerEditComponent } from './components/customer/edit-customer/edit-customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddOrderComponent } from './components/order/add-order/add-order.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: 'orders', component: OrderComponent },
  { path: 'orders/add', component: AddOrderComponent },
  { path: 'orders/:orderId', component: OrderDetailsComponent },
  
  { path: 'employee', component: EmployeeComponent },
  { path: 'product', component: ProductComponent },
  
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/add', component: AddCustomerComponent},
  { path: 'customers/:customerId', component: CustomerEditComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
