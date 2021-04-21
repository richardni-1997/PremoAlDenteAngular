import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  submitted = false;
  order = {
    customerId: '',
    employeeId: '',
    timestamp: '',
    total: '',
    zipcode: '',
    products: '',
  };

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {

  }

  saveOrder(): void {
    const data = {
      customerId: this.order.customerId,
      employeeId: this.order.employeeId,
      timestamp: this.order.timestamp,
      total: this.order.total,
      zipcode: this.order.zipcode,
      products: this.order.products
    };

    this.orderService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newOrder(): void {
    this.submitted = false;
    this.order = {
      customerId: '',
      employeeId: '',
      timestamp: '',
      total: '',
      zipcode: '',
      products: ''
    }
  }

}
