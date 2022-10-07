import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { Car } from 'src/app/Car';

import { ListService } from 'src/app/service/list.service';

@Component({
    selector: 'app-list-render',
    templateUrl: './list-render.component.html',
    styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
    animals: Animal[] = [];

    cars: Car[] = [];
    

    animalDetails = '';
    carDetails = '';

    constructor(private listServices: ListService ) {
        this.getAnimals();
        this.getCars();
    }

    ngOnInit(): void {}

    showAge(animal: Animal) {
        this.animalDetails = `O Pet ${animal.name} tem ${animal.age} anos`;
    }

    showType(car: Car) {
        this.carDetails = `O carro ${car.model} e do ano ${car.age}`
    }

    removeAnimals(animal: Animal) {
        console.log('Remove Animal...');
       this.animals = this.listServices.remove(this.animals, animal);
    }

    removeCars(car: Car) {
        console.log('Remove Car...');
       this.cars = this.listServices.removes(this.cars, car);
    }

    getAnimals(): void {
        this.listServices.getAll().subscribe((animals) => (this.animals = animals));
    }


    getCars(): void {
        this.listServices.getAll2().subscribe((cars) => (this.cars = cars));
    }

}
