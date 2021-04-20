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
  details = ["OrderId", "CustomerId", "EmployeeId", "Products", "Date", "Total", "Zipcode"];

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
  

}
