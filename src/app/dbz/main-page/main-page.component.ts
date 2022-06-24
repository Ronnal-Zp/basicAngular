import { Component } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  
  

  personaje1: Personaje = {
    nombre: "Trunks",
    poder: 12000
  } 
  
  /*
  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }

  nuevoPersonaje(data: Personaje){
    this.personajes.push(data)
  }
  */

  constructor(){}


}
 