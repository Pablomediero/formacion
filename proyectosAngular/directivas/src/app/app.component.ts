import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario Registro';
  mensaje: string = ""

  registrarUsuario(){
    this.mensaje = "Us"
  }
}
