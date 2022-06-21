import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ["Ironman", "Spiderman", "Thor", "Panter"];

  heroeBorrado: string = "";

  borrar(){
    console.log("Borrando..");
    this.heroeBorrado = this.heroes.pop() || "";


    /*
    let $span = document.getElementById("showHer");
    const node = document.createElement("li");
    node.textContent = heroeBorrado || "";

    $span?.appendChild(node);
    */

  }

}
