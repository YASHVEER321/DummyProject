import { Component } from '@angular/core';
// import {Car} from './interface';
//import {CarService} from './service';
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'news-root',
  templateUrl: './dataGrid.component.html',
  //styleUrls:  ['./footer.component.css']
})
export class dataGridComponent  {
  title = `Hello yash`;
  // data="yash"
  // cars: Car[];
//     cars: MenuItem[];
//     selectedCar:
//     ngOnInit() {
//       this.cars = [{},{}]

// }
 selectedCar: { vin: number, year: string ,brand: string,color: string}[] = [
    { "vin": 0, "year": "Available", brand:"audi",color:"red"},
    {  "vin": 0, "year": "Available", brand:"audi",color:"red"},
    {  "vin": 0, "year": "Available", brand:"audi",color:"red"}
];
 cars: { vin: number, year: string ,brand: string,color: string}[] = [
    { "vin": 0, "year": "Available", brand:"audi",color:"red"},
    {  "vin": 0, "year": "Available", brand:"audi",color:"red"},
    {  "vin": 0, "year": "Available", brand:"audi",color:"red"}
];

// selectedCar:{ "vin": 0, "year": "Available", brand:"audi",color:"red"}
// cars:{ "vin": 0, "year": "Available", brand:"audi",color:"red"}

    //constructor(private carService: CarService) { }

    // ngOnInit() {
    //     this.carService.getCarsLarge().then(cars => this.cars = cars);
    // }

// let userTestStatus: { id: number, name: string }[] = [
//     { "id": 0, "name": "Available" },
//     { "id": 1, "name": "Ready" },
//     { "id": 2, "name": "Started" }
// ];

//let arr1: boolean[] = [];



    //var cars:{vin:string,year:string,brand:string,color:string,price:string,saleDate:string}[]=[{"vin":"Audi"},{"year":"1994"},{"brand":"Audi"},{"color":"black"},{"price":"2m inr"},{"saleDate":"2019"}]

     // cars=; 


}


