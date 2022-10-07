import { Component, OnInit } from '@angular/core';

import { Film } from 'src/app/Films';

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

films: Film [] = [
  { name: 'Athena', type: 'Drama', age: 2022,  classification: '18 Anos' },
  { name: 'Free Guy - Assumindo o Controle', type: 'Aventura', age: 2021, classification: 'Livre'},
  { name: 'Lou', type:'Ação', age: 2022, classification: '14 Anos'}
]

filmDetails = '';

  constructor(private listServices: ListService) { }

  ngOnInit(): void {
  }

  showClassificatio(film: Film) {
    this.filmDetails = `A classificaçã do Filme: ${film.name} é: ${film.classification}`
}

removeFilms(film: Film) {
  this.films = this.listServices.removeFilm(this.films, film);
}
}
