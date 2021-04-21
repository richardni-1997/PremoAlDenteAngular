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

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
