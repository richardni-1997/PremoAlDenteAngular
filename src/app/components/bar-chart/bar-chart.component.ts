import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/services/order.service";
import { Order } from "../order/model/order.model";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"]
})
export class BarChartComponent implements OnInit {
  zip1 = [
    {name: '2015', value:10000},
    {name: '2016', value:12000},
    {name: '2017', value:14000},
    {name: '2018', value:16000},
    {name: '2019', value:18000},
    {name: '2020', value:20000}
  ];
  zip2 = [
    {name: '2015', value:20000},
    {name: '2016', value:18000},
    {name: '2017', value:10000},
    {name: '2018', value:7000},
    {name: '2019', value:5000},
    {name: '2020', value:2000}
  ];
  zip3 = [
    {name: '2015', value:20000},
    {name: '2016', value:12000},
    {name: '2017', value:16000},
    {name: '2018', value:6000},
    {name: '2019', value:13000},
    {name: '2020', value:25000}
  ];
  zip4 = [
    {name: '2015', value:20000},
    {name: '2016', value:15000},
    {name: '2017', value:14000},
    {name: '2018', value:16000},
    {name: '2019', value:18000},
    {name: '2020', value:20000}
  ];

  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"]
  };


  orders: any;
  details = ["OrderId", "Date", "Total"];
 
  orderdata: Order[] = [];
  constructor(private orderService: OrderService) { }

  
  addOrderData(): void {
    this.orders.forEach(order => {
      if(order.timestamp)
      this.orderdata.push(new Order(order.total, order.zipcode));
    });
  }
  addTotals(): void { 
    let zip1 = 0;
    let zip2 = 0;
    let zip3 = 0;
    let zip4 = 0;
    this.orders.forEach(order => {
      if(order.zipcode == 55501)
      zip1 += order.total;
      if(order.zipcode == 55502)
      zip2 += order.total;
      if(order.zipcode == 55503)
      zip3 += order.total;
      if(order.zipcode == 55504)
      zip4 += order.total;
    });
    for(let x = 0; x < 4; x++){
    }
  }

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
  }
      

}

