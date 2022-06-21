import { Component } from "@angular/core";

@Component({
    selector: "app-acumulador",
    template: `
        <h1>Componente Acumulador</h1>

        <h2>La base es: {{base}}</h2>

        <button (click)="acumular(base)">+5</button>

        <span> {{numero}} </span>

        <button (click)="acumular(-base)">{{-base}}</button> 
    `
    ,styleUrls: ['../../app.component.css']
})

export class AppAcumulador{
    title: string = 'ang-basico';
    numero: number = 10;
    base: number = 5;

  sumar(){
    this.numero += 1;
  }

  restar(){
    this.numero -= 1;
  }

  acumular(valor: number){
    this.numero += valor;
  }
}