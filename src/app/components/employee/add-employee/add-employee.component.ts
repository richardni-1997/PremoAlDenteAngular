import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  

  employee = {
    name: '',
    address: '',
    startDate: null,
    endDate: null,
    active: true
  }
  submitted = false;

  selected = '';
  name = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  startdate = new FormControl('', [Validators.required]);


  constructor(private employeeService: EmployeeserviceService) { }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    const data = {
      name: this.employee.name,
      address: this.employee.address,
      startDate: this.employee.startDate,
      endDate: this.employee.endDate,
      active: this.employee.active
    };

    this.employeeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      name: '',
      address: '',
      startDate: null,
      endDate: null,
      active: true
    };
  }

  getErrorName() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    return this.name.hasError('name') ? 'Not a valid name' : '';
  }
  getErrorAddress() {
    if (this.address.hasError('required')) {
      return 'You must enter a value';
    }
    return this.address.hasError('address') ? 'Not a valid address' : '';
  }
  getErrorStartDate() {
    if (this.startdate.hasError('required')) {
      return 'You must enter a value';
    }
    return this.startdate.hasError('startdate') ? 'Not a valid startdate' : '';
  }
}
