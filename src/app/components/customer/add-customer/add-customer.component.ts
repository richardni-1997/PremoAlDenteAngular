import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customerservice.service';

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

    customer = {
        name: '',
        phoneNumber: '',
        address: ''
    };
    submitted = false;

    constructor(private customerService: CustomerService) { }

    ngOnInit(): void {

    }

    saveCustomer(): void {
        const data = {
            phoneNumber: this.customer.phoneNumber,
            name: this.customer.name,
            address: this.customer.address
        };

        this.customerService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                    this.submitted = true;
                },
                error => {
                    console.log(error);
                });
    }

    newCustomer(): void {
        this.submitted = false;
        this.customer = {
            phoneNumber: '',
            name: '',
            address: ''
        };
    }
}