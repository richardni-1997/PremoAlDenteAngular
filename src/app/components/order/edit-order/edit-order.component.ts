import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  currentOrder = null;
  message = '';

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router) { }

  
  ngOnInit(): void {
    this.message = '';
    this.getOrder(this.route.snapshot.paramMap.get('orderId'));
  }

  getOrder(orderid): void {
    this.orderService.getOrder(orderid)
      .subscribe(
        data => {
          this.currentOrder = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )};

  updateOrder(): void {
    this.orderService.update(this.currentOrder.orderid, this.currentOrder)
      .subscribe( 
        response => {
          console.log(response);
          this.message = 'The order was updated successfully!';
        },
        error => {
          console.log(error);
        }
      )};  
}
