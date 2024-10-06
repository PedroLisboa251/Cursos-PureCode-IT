import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Pedro';
  age: number = 23;
  job = 'Coletador';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car = {
    name: "Sandero",
    year: "2013",
    
  }


}
