import { ChangeDetectionStrategy, Component, effect, Input, input, model, signal } from '@angular/core';
import { IContador, Producto } from '../interfaces/contador';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class Comp1Component {

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
