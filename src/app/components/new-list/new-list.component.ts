import { Component, OnInit } from '@angular/core';

import { Film } from 'src/app/Films';

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

films: Film [] = [];

filmDetails = '';

  constructor(private listServices: ListService) { 
    this.getFilms();
  }

  ngOnInit(): void {
  }

  showClassificatio(film: Film) {
    this.filmDetails = `A classificaçã do Filme: ${film.name} é: ${film.classification}`
}

removeFilms(film: Film) {
  this.films = this.films.filter(f => film.name !== f.name);
  this.listServices.removeFilm(film.id).subscribe();
}

getFilms(): void {
  this.listServices.getAll1().subscribe((films) => (this.films = films));
}
}
