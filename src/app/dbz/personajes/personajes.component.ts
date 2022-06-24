import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
//import { Personaje } from '../interfaces/personaje.interface';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent  {

  /*
  @Input('data')
  personajes: Personaje[] = []
  */

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(public dbzService: DbzService){

  }
}
