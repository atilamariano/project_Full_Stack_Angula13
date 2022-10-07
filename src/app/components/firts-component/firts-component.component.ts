import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firts-component',
  templateUrl: './firts-component.component.html',
  styleUrls: ['./firts-component.component.css']
})
export class FirtsComponentComponent implements OnInit {
   name = 'Atila';
   lastName = 'Mariano';
   age = 35;
   hobbies = ['malhar', 'jogar', 'desenhar'];
   car = {
   name: 'EcoSport',
   cor: 'Branco'
   }

  

  constructor() { }

  ngOnInit(): void {
  }

}
