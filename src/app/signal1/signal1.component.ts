import { ChangeDetectionStrategy, Component, effect, inject, model } from '@angular/core';
import { Producto } from '../interfaces/contador';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal1',
  templateUrl: './signal1.component.html',
  styleUrl: './signal1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
  ],
  
})
export class Signal1Component {

  productoControl = new FormControl<Producto>({ cantidad: 10, precio: 10 });

  #formBuilder = inject(FormBuilder);
  form = this.#formBuilder.group({
    cantidad: [],
    precio: [],
  });

  get cantidadControl(): FormControl {
    return this.form.get('cantidad') as FormControl;
  }

  get precioControl(): FormControl {
    return this.form.get('precio') as FormControl;
  }

  producto = model.required<Producto>();
  
  // effect = effect((onCleanup) => {
  //   const timer = setTimeout(() => {
  //     this.incrementar();
  //   }, 1000);
  //   onCleanup(() => {
  //     clearTimeout(timer);
  //   });
  // });

  constructor() {
    // console.log('producto', this.producto());
    this.cantidadControl.valueChanges.subscribe((cantidad) => {
      // console.log('cantidad', cantidad);
      this.producto.update((producto) => {
        return {
          ...producto,
          cantidad,
        };
      });
    });
  }

  effectSyncProductoCantidad = effect(() => {
    this.cantidadControl.setValue(this.producto().cantidad, { emitEvent: false });
  });

  incrementar() {
    this.producto.update( (a) => {
      return { 
        ...a,
        cantidad: a.cantidad+1,
      };
    });
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
