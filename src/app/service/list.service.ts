import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Car } from '../Cars';
import { Film } from '../Films';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ListService {
    private apiUrl = 'http://localhost:3000/animals';
    private apiUrl1 = 'http://localhost:3000/films';
    private apiUrl2 = 'http://localhost:3000/cars';

    constructor(private http: HttpClient) {}

    remove(id: number) {
        return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
    }
    removes(id: number) {
        return this.http.delete<Car>(`${this.apiUrl2}/${id}`);
    }
    removeFilm(id: number) {
        return this.http.delete<Film>(`${this.apiUrl1}/${id}`);
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

    getItem(id: number): Observable<Animal> {
        return this.http.get<Animal>(`${this.apiUrl}/${id}`);
    }
    getItem1(id: number): Observable<Film> {
        return this.http.get<Film>(`${this.apiUrl1}/${id}`);
    }
    getItem2(id: number): Observable<Car> {
        return this.http.get<Car>(`${this.apiUrl2}/${id}`);
    }
}
