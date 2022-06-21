import { Component } from "@angular/core";


@Component({
    selector: "app-heroe",
    templateUrl: './heroe.component.html'
})

export class AppHeroe{
    nombre: string = "IronMan";
    edad:   number = 40;
    
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }
}

