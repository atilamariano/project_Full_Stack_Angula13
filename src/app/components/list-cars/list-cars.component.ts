import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Cars';
import { ListService } from 'src/app/service/list.service';

@Component({
    selector: 'app-list-cars',
    templateUrl: './list-cars.component.html',
    styleUrls: ['./list-cars.component.css'],
})
export class ListCarsComponent implements OnInit {
    cars: Car[] = [];

    carDetails = '';

    constructor(private listServices: ListService) {
        this.getCars();
    }

    ngOnInit(): void {}

    showType(cars: Car) {
        this.carDetails = `O carro ${cars.model} e do ano ${cars.age}`;
    }

    removeCars(cars: Car) {
        this.cars = this.cars.filter(c => cars.model !== c.model);
        this.listServices.removes(cars.id).subscribe();
    }

    getCars(): void {
        this.listServices.getAll2().subscribe(cars => (this.cars = cars));
    }
}
