import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';
import { Car } from 'src/app/Cars';
import { Film } from 'src/app/Films';

import { ListService } from 'src/app/service/list.service';

@Component({
    selector: 'app-item-datail',
    templateUrl: './item-datail.component.html',
    styleUrls: ['./item-datail.component.css'],
})
export class ItemDatailComponent implements OnInit {
    animal?: Animal;
    car?: Car;
    film?: Film;


    constructor(
        private listService: ListService,
        private route: ActivatedRoute,
    ) {
        this.getAnimals();
        this.getFilms();
        this.getCars();
    }

    ngOnInit(): void {}

    getAnimals() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.listService
            .getItem(id)
            .subscribe(animal => (this.animal = animal));
    }

    getFilms() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.listService.getItem1(id).subscribe(film => (this.film = film));
    }

    getCars() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.listService.getItem2(id).subscribe(car => (this.car = car));
    }
}
