import { Injectable } from "@angular/core";
import { Personajes } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{

    private _personajes: Personajes[] = [
        {
            nombre: 'Charmander',
            poder: 1000
        },
        {
            nombre: 'Bulbasaur',
            poder: 900
        }

    ];

    get personajes(): Personajes[]{
        return [...this._personajes];
    }
    
    constructor(){}

    agregarPersonaje(personajes:Personajes){
        this._personajes.push(personajes);

    }
    

}