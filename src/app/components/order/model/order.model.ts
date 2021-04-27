// export class Order {
//     timestamp: Date;
//     total: DoubleRange;
//     zipcode: number;
//     constructor(timestamp: Date, total: DoubleRange, zipcode: number){
//         this.timestamp = timestamp;
//         this.total = total;
//         this.zipcode = zipcode;
//     };
// }
    export class Order {
        year: number;
        orders: {
            zipcode: number,
            total: DoubleRange
        }
        
        constructor(zipcode:number, total:DoubleRange){
            this.orders.zipcode = zipcode;
            this.orders.total = total;
        }
    }
