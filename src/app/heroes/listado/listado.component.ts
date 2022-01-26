import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[]=['SpiderMan','IronMan','SuperMan','Capitan America'];
  heroeBorrado:string='';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    
    
    
  }

}

