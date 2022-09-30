import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { Car } from '../Car';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() {}

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);
  }

  removes(cars: Car[], car: Car) {
    return cars.filter((c) => car.model !==c.model);
  }
}
