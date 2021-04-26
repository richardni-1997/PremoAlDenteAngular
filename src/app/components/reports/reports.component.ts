import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { OrderService } from 'src/app/services/order.service';
import { filter } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { MatTab } from '@angular/material/tabs';

export interface Order {
  orderid: number;
  products: string;
  timestamp: Date;
  total: number;
  zipcode: number;
  customerId: number;
  employeeId: number;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private employeeService: EmployeeserviceService) { }

  orders: any;
  employees: any;
  employID = [];
  isActive = [];
  zipcodes = [55501, 55502, 55503, 55504];
  currentOrder = null;
  message = '';
  selected = '';
  employeeTable = 0;
  zipcodeTable = 0;
  ordersTotal = 0;
  displayedColumns: string[] = [
    'orderid', 'customerId', 'employeeId', 'date',
    'zipcode', 'total'];
  areas = [55501, 55502, 55503, 55504];
  // zipcode = ["Select", "Employee Id", "Zipcode", "Date/Week", "Total"];
  // employee = ["Select", "Employee Id", "Date/Week", "Total"];
  employeeId: number = null;
  startDate: Date = null;
  endDate: Date = null;
  zipCode: number = null;
  dataSource: MatTableDataSource<Order>;

  ngOnInit(): void {
    this.retrieveOrders();
  }

  retrieveOrders(): void {
    this.orderService.getAll()
      .subscribe(
        data => {
          this.orders = data;
          this.dataSource = new MatTableDataSource<Order>(this.orders);
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
  saveStartDate(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.startDate = event.value;
  }
  saveEndDate(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.endDate = event.value;
  }
  saveZipCode(event: MatSelectChange) {
    this.zipCode = event.value;
  }
  saveEmployeeId(event: MatSelectChange) {
    this.employeeId = event.value;
  }
  resetFilter() {
    this.ordersTotal = 0;
    this.startDate = null;
    this.endDate = null;
    this.zipCode = null;
    this.employeeId = null;
    this.orders.forEach(order => {
      this.ordersTotal += order.total;
    })
    this.dataSource = new MatTableDataSource<Order>(this.orders);
  }
  filterOrders() {
    let temp = [];
    this.ordersTotal = 0;

    if (this.zipCode) {
      this.ordersTotal = 0;

      this.orders.forEach(order => {
        if (order.zipcode == this.zipCode) {
          temp.push(order);
          this.ordersTotal += order.total;
        }
      })
    } else {
      temp = this.orders;
    }

    let tempEmp = [];
    if (this.employeeId) {
      this.ordersTotal = 0;
      temp.forEach(order => {
        if (order.employeeId == this.employeeId) {
          tempEmp.push(order);
          this.ordersTotal += order.total;
        }
      })
    } else {
      tempEmp = temp;
    }
    // this.dataSource = new MatTableDataSource<Order>(tempEmp);

    let tempDate = [];
    if (this.startDate && this.endDate) {
      this.ordersTotal = 0;
      tempEmp.forEach(order => {
        if (new Date(order.timestamp) >= this.startDate && new Date(order.timestamp) <= this.endDate) {
          tempDate.push(order);
          this.ordersTotal += order.total;
        }
      })
    } else {
      tempDate = tempEmp;
    }
    this.dataSource = new MatTableDataSource<Order>(tempDate);
  }

  // filterOrders2() {
  //   let temp = [];
  //   this.ordersTotal = 0;

  //   if (this.zipcode) {
  //     this.ordersTotal = 0;

  //     this.orders.forEach(order => {
  //       if (order.zipcode == this.zipcode) {
  //         temp.push(order);
  //         this.ordersTotal += order.total;
  //       }
  //     })
  //   } else {
  //     temp = this.orders;
  //   }
  //   let tempDate = [];
  //   if (this.startDate && this.endDate) {
  //     this.ordersTotal = 0;
  //     temp.forEach(order => {
  //       if (new Date(order.timestamp) >= this.startDate && new Date(order.timestamp) <= this.endDate) {
  //         tempDate.push(order);
  //         this.ordersTotal += order.total;
  //       }
  //     })
  //   } else {
  //     tempDate = temp;
  //   }
  //   this.dataSource = new MatTableDataSource<Order>(tempDate);
  // }
  // filterOrders():void {
  //   this.filteredorders = this.orderService.getAll().pipe(filter(order => order > 5));
  //   this.filteredorders.getAll().subscribe(
  //     data => {
  //       this.orders = data;
  //       console.log(data);
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // this.orders.forEach(order => this.orders.pipe.filter(order => order.employeeId = 11));
  // this.orderService.getAll().subscribe(filter(order => this.selected = false))
  // }

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
  
  employeeReport(empId) {
    var x = document.getElementById("showEmployee");
    if (empId == 0) {
      x.style.display = "none";
    } else {
      this.selected = empId;
      this.employeeTable = empId;
      this.displayBlock(x);
    }
  }
  displayBlock(hide) {
    hide.style.display === "none" ? hide.style.display = "block" : hide.style.display = "none";
  }

}
