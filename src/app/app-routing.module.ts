import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
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
=======
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerEditComponent } from './components/customer/edit-customer/edit-customer.component';


const routes: Routes = [
  {path: 'customers/add', component: AddCustomerComponent},
  {path: 'customers/:customerId', component: CustomerEditComponent},
  {path: 'customers', component: CustomerComponent},

]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
>>>>>>> Stashed changes
})
export class AppRoutingModule { }
