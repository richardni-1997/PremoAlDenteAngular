import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
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
  { path: 'customer', component: CustomerComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
