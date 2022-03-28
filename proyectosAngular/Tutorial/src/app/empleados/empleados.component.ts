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
  empresa: string = "Hiberus"

  habilitacionTexto: boolean = false
  resgistro: any
  textoRegistro: string = "No hay nadie registrado"

  getEdad(): number{

    return this.edad
  }

  constructor() { }

  ngOnInit(): void {
  }

  

  setUsuarioRegistrado(event: Event){
    // alert("Usuario Registrado")
    if((<HTMLInputElement>event.target).value === "on"){
      this.habilitacionTexto = false
      this.textoRegistro = "Usuario registrado"

    }else{
     this.habilitacionTexto = true
     this.textoRegistro = "No hay nadie registrado "


    }
  
  }
}
