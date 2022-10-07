import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { Car } from '../Car';

import { Film } from '../Films';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() {}

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);
  }

  removes(cars: Car[], car: Car) {
    return cars.filter((c) => car.model !== c.model);
  }

  removeFilm(films: Film[], film: Film) {
    return films.filter((f) => film.name !== f.name);
  }


}
