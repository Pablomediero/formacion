import { Component } from '@angular/core';

var numero = 2;

@Component({
  selector: 'app-root',
  template: `
  
  <h1>Titulo de Prueba</h1>
  ${numero}
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba';
}
