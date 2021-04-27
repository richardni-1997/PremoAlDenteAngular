import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  currentEmployee = null;
  message = '';
  enddate = new FormControl('', [Validators.required]);

  constructor(private employeeService: EmployeeserviceService,
    private route: ActivatedRoute
    ){ }

  ngOnInit(): void {
    this.message = '';
    this.getEmployee(this.route.snapshot.paramMap.get('id'));
  }

  getEmployee(id): void {
    this.employeeService.get(id)
      .subscribe(
        data => {
          this.currentEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateEmployee(): void {
    this.employeeService.update(this.currentEmployee.employeeId, this.currentEmployee)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The employee was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateActive(status): void {
    const data = {
      name: this.currentEmployee.name,
      address: this.currentEmployee.address,
      startDate: this.currentEmployee.startDate,
      endDate: this.currentEmployee.endDate,
      active: status
    };

    this.employeeService.update(this.currentEmployee.employeeId, data)
      .subscribe(
        response => {
          this.currentEmployee.active = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  getErrorEndDate() {
    if (this.enddate.hasError('required')) {
      return 'You must enter a End Date';
    }
    return this.enddate.hasError('startdate') ? 'Not a valid startdate' : '';
  }
}
