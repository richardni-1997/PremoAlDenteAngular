import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  constructor(private orderService: OrderService) { }

  orders: any;
  details = ["OrderId", "CustomerId", "EmployeeId", "Products", "Date", "Total", "Zipcode", "Action"];
  currentOrder = null;
  message = '';

  ngOnInit(): void {
    this.retrieveOrders();
  }

  retrieveOrders():void {
    this.orderService.getAll()
    .subscribe(
      data => {
        this.orders = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshOrders():void {
    this.retrieveOrders();
    this.currentOrder = null;
    this.message = '';
  }

  setActiveOrder(order):void {
    this.currentOrder = order;
  }

  deleteOrder(): void {
    this.orderService.delete(this.currentOrder.orderid)
      .subscribe(
        response => {
          console.log(response);
          this.message = "The order has been deleted";
        },
        error => {
          console.log(error);
        }
      )};
}
