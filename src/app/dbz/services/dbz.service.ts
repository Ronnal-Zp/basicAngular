import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";


@Injectable()
export class DbzService{

    constructor(){
        console.log("Servicio inicializado");
    }

    private _personajes: Personaje[] = [
        {
          nombre: "Goku",
          poder: 20000
        },
        {
          nombre: "Vegetta",
          poder: 18000
        }
      ]

    get personajes(): Personaje[]{
        return [...this._personajes]
    }  

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
    
}