import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent {

  @Input()
  personaje1: Personaje = {
    nombre: "",
    poder: 0
  }

  constructor(public dbzService: DbzService){}
  
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.personaje1.nombre == "" ) return;
    
    console.log(this.personaje1);
    // this.onNuevoPersonaje.emit(this.personaje1)

    this.dbzService.agregarPersonaje(this.personaje1)

    this.personaje1 = {
      nombre: "",
      poder: 0
    }


  }
}
