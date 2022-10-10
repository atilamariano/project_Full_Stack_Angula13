import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  cars: Car[] = [];

  carDetails = '';

  constructor(private listServices: ListService ) { 
    this.getCars();
  }

  ngOnInit(): void {
  }

  showType(car: Car) {
    this.carDetails = `O carro ${car.model} e do ano ${car.age}`
}

removeCars(car: Car) {
  console.log('Remove Car...');
 this.cars = this.listServices.removes(this.cars, car);
}

getCars(): void {
  this.listServices.getAll2().subscribe((cars) => (this.cars = cars));
}


}
