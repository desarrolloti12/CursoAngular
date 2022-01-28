import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  @Input() personajes: Personajes[] = [];

  @Input() nuevo: Personajes = {
    nombre: '',
    poder: 0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personajes> = new EventEmitter();


  constructor(private dbzService: DbzService){

  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {}
    console.log(this.nuevo);//{nombreEstudiante: 'Andrea', testScore: 100}
    //this.onNuevoPersonaje.emit(this.nuevo);
   // this.personajes.push(this.nuevo);
   this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  
}
