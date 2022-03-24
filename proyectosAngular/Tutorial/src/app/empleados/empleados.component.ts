import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  nombre: string = "Juan";
  apellido: string = "Diaz";
  private edad: number = 22
  // empresa: string = "Hiberus"

  getEdad(): number{

    return this.edad
  }

  constructor() { }

  ngOnInit(): void {
  }
}
