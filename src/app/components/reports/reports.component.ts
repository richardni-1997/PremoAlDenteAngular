/*import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  
  constructor(
    private orderService: OrderService,
    private employeeService:EmployeeserviceService){}

  orders: any;
  employees: any;
  clicked = ["OrderId", "CustomerId", "EmployeeId", "Products", "Date", "Total", "Zipcode"];
  empIds = [];
  isActive = [];
  zipcodes = [55501,55502,55503,55504];
  currentOrder = null;
  message = '';
  selected = '';
  employeeTable = 0;
  zipcodeTable = 0;  

  ngOnInit(): void {
    this.retrieveOrders();
  }

  retrieveOrders():void {
    this.orderService.getAll()
    .subscribe(
      data => {
        this.orders = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

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

  refreshReports():void {
    this.currentOrder = null;
    this.message = '';
    var x = document.getElementById("hideemployees");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    var x = document.getElementById("hidezipcode");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    this.employeeReport(0);
    this.zipcodeReport(0);
  }

  addEmp(empId):void{
    if (this.empIds.includes(empId) == false){
      this.empIds.push(empId);
    }
  }

  addActive(empId,empActive):void{
    if (this.empIds.includes(empId) == true && empActive == true && this.isActive.includes(empId) == false){
      this.isActive.push(empId);
    }
    this.isActive.sort(function(a,b){
      return a-b;
    });
  }
  //hides all emlpoyees
  hideEmployees() {
    var x = document.getElementById("hideemployees");
    this.displayBlock(x);
  }
  //hides all zipcodes
  hideZipcode() {
    var x = document.getElementById("hidezipcode");
    this.displayBlock(x);
  }
  //hides individual employees
  employeeReport(empId){
    var x = document.getElementById("showEmployee");
    if (empId == 0){
      x.style.display = "none";
    }else{
      this.selected = empId;
      this.employeeTable = empId;
      this.displayBlock(x);
    }
  }
  //hides individual zipcodes
  zipcodeReport(zipId){
    var x = document.getElementById("showZipcode");
    if (zipId == 0){
      x.style.display = "none";
    }else{
      this.selected = zipId;
      this.zipcodeTable = zipId;
      this.displayBlock(x);
    }
  }

  displayBlock(hide){
    hide.style.display === "none" ? hide.style.display = "block" : hide.style.display = "none";
  }

}*/
