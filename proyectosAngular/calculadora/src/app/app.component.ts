import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini-Calculadora';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar(): void{
    if(this.check()){
      this.resultado = this.numero1 + this.numero2
    }
  }
  restar(): void{
    if(this.check()){
      this.resultado = this.numero1 - this.numero2
    }
  }
  multi(): void{
    if(this.check()){
      this.resultado = this.numero1 * this.numero2
    }
  }
  dividir(): void{
    if(this.check()){
      this.resultado = this.numero1 / this.numero2
    }
  }

  check(): boolean{
    if(this.numero1 == 0|| this.numero2 == 0){
      alert("Error: Valores a 0")
      return false
    }else{
      
      return true
    }
  }

}
