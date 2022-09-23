import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { Car } from 'src/app/Car';

@Component({
    selector: 'app-list-render',
    templateUrl: './list-render.component.html',
    styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
    animals: Animal[] = [
        { name: 'Leleco', type: 'Byrd', age: 4 },
        { name: 'Lemon', type: 'Cat', age: 5 },
        { name: 'Silene', type: 'Dog', age: 8},
        { name: 'Herbie', type: 'Fish', age:1},
    ]

    cars: Car[] = [
      {model: 'gipe', age: 2008},
      {model:'sand', age: 2009},
      {model:'pineapple', age: 2005},
      {model: 'renew', age: 2010}
    ]

    animalDetails = '';

    carDetails = '';

    constructor() {}

    ngOnInit(): void {}

    showAge(animal: Animal) {
        this.animalDetails = `O Pet ${animal.name} tem ${animal.age} anos`;
    }

    showType(car: Car) {
        this.carDetails = `O carro ${car.model} e do ano ${car.age}`
    }
}
 