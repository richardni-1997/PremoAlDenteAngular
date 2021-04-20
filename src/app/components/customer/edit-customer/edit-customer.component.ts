import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customerservice.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class CustomerEditComponent implements OnInit {

  currentCustomer = null;
  message = '';

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCustomer(this.route.snapshot.paramMap.get('customerId'));
  }

  getCustomer(customerId): void {
    this.customerService.get(customerId)
      .subscribe(
        data => {
          this.currentCustomer = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCustomer(): void {
    this.customerService.update(this.currentCustomer.customerId, this.currentCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The customer was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  backToCustomer(): void {
    this.customerService.get(this.currentCustomer.customerId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/customers']);
        },
        error => {
          console.log(error);
        });
  }
}