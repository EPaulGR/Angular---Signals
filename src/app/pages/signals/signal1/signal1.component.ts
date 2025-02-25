import { ChangeDetectionStrategy, Component, effect, inject, model } from '@angular/core';
import { Producto } from '../../../core/interfaces/contador';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

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
  
  producto = model.required<Producto>();
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

  // effect = effect((onCleanup) => {
  //   const timer = setTimeout(() => {
  //     this.incrementar();
  //   }, 1000);
  //   onCleanup(() => {
  //     clearTimeout(timer);
  //   });
  // });

  constructor() {
    this.cantidadControl.valueChanges.subscribe((cantidad) => {
      this.producto.update((producto) => {
        return { ...producto, cantidad };
      });
    });
  }

  effectSyncProductoCantidad = effect(() => {
    this.cantidadControl.setValue(this.producto().cantidad, { emitEvent: false });
  });

  incrementar() {
    this.producto.update( (producto) => {
      return { ...producto, cantidad: producto.cantidad+1 };
    });
  }

  decrementar() {
    this.producto.update( (producto) => {
      return {  ...producto, cantidad: producto.cantidad-1 };
    });
  }

}
