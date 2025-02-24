import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { Producto } from '../interfaces/contador';

@Component({
  selector: 'app-signal1',
  imports: [],
  templateUrl: './signal1.component.html',
  styleUrl: './signal1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class Signal1Component {

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
