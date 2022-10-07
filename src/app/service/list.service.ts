import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { Car } from '../Car';

import { Film } from '../Films';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';
  private apiUrl1 = 'http://localhost:3000/films';
  private apiUrl2 = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {}

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);
  }

  removes(cars: Car[], car: Car) {
    return cars.filter((c) => car.model !== c.model);
  }

  removeFilm(films: Film[], film: Film) {
    return films.filter((f) => film.name !== f.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getAll1(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl1);
  }

  getAll2(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl2);
  }


}
