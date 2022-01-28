import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent  {

  //@Input() personajes: Personajes[]=[];

  get personajes(){
    return this.dbzService.personajes;
  }



  constructor( private dbzService: DbzService) {
    
  }

}
