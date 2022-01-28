import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html'
})
export class MainPageComponent {

   //personajes: Personajes[]=[];

    nuevo: Personajes={
        nombre:'Pikachu',
        poder:800
    }

    agregarNuevoPersonaje( argumento: Personajes){
        //this.personajes.push(argumento);
    }

    constructor(){
       // this.personajes= this.dbzService.personajes;

    }


}
