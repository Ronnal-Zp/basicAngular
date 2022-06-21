import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ProcesosModulos } from './procesos/procesos.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ProcesosModulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
