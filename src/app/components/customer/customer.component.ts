import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customerservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: any;
  currentCustomer = null;
  currentIndex = -1;
  phoneNumber = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers(): void {
    this.customerService.getAll().subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCustomers();
    this.currentCustomer = null;
    this.currentIndex = -1;
  }

  setActiveCustomer(customer, index): void {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }

}
