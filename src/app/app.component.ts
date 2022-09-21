import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Anthony';

  userMother = {
    name: 'Marília', lastName:'Isabel'
  };

  userData = {
    email: 'anthonymariano@hotmail.com',
    age: '03 meses'
  }

  title = 'Front-End Angular 14';
}
