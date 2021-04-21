import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees = [];
  currentEmployee = null;
  currentIndex = -1;
  active = null;

  constructor(private employeeService: EmployeeserviceService) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeeService.getAll()
      .subscribe(
        data => {
          this.employees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEmployees();
    this.currentEmployee = null;
    this.currentIndex = -1;
  }

  setActiveEmployee(employee, index): void {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }

 sortEmployees(active): void {
    if (active) {
      this.employeeService.findByStatus("active")
        .subscribe(data => {
          this.employees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    } 
    else {
      this.employeeService.findByStatus("inactive")
        .subscribe(data => {
          this.employees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }
  }

}
