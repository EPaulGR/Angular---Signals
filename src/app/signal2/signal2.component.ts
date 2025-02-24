import { Component, model } from '@angular/core';
import { Producto } from '../interfaces/contador';

@Component({
  selector: 'app-signal2',
  imports: [],
  templateUrl: './signal2.component.html',
  styleUrl: './signal2.component.css'
})
export class Signal2Component {

    producto = model.required<Producto>();
    
    // effect = effect(() => {
    //   setTimeout(() => {
    //     this.incrementar();
    //   }, 3000);
    // });
  
    incrementar() {
      console.log('incrementar');
      this.producto.update( (a) => {
        return { 
          ...a,
          cantidad: a.cantidad+1,
        };
      });
      console.log(this.producto().cantidad);
    }
  
    decrementar() {
      this.producto.update( (a) => {
        return { 
          ...a,
          cantidad: a.cantidad-1,
        };
      });
    }

}
