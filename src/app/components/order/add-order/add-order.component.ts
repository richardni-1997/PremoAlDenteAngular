import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customerservice.service';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
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
    products: '',
    zipcode: '',
    
  };
  customers: any;
  employees: any;
  custID = [];
  employID = [];
  isActive = [];

  constructor(private orderService: OrderService,
    private customerService: CustomerService,
    private employeeService: EmployeeserviceService) { }

  ngOnInit(): void {
    this.retrieveInfo();
  }



  addCust(custId): void {
    if (this.custID.includes(custId) == false) {
      this.custID.push(custId);
    }
  }
  
  addEmp(empId): void {
    if (this.employID.includes(empId) == false) {
      this.employID.push(empId);
    }
  }
  addActive(empId, empActive): void {
    if (this.employID.includes(empId) == true && empActive == true && this.isActive.includes(empId) == false) {
      this.isActive.push(empId);
    }
    this.isActive.sort(function (a, b) {
      return a - b;
    });
  }

  retrieveInfo() {
    this.customerService.getAll().subscribe(
      data => {
        this.customers = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

    this.employeeService.getAll().subscribe(
      data => {
        this.employees = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
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
