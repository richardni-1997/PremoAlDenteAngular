import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  order = {
    customerId: '',
    employeeId: '',
    timestamp: '',
    total: '',
    zipcode: '',
    products: '',
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
