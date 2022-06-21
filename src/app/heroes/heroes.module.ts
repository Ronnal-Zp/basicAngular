import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


import { AppHeroe } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";



@NgModule({
    declarations: [
        ListadoComponent,
        AppHeroe
    ],
    exports: [
        AppHeroe,
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}