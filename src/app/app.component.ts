import { Component, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { Comp1Component } from './comp1/comp1.component';
import { NoSignalComponent } from './noSignal/noSginal.component';
import { Producto } from './interfaces/contador';
import { Signal2Component } from './signal2/signal2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Comp1Component,
    NoSignalComponent,
    Signal2Component,
  ]

})
export class AppComponent {

  productoNoSignal = { cantidad: 10, precio: 10 };
  producto1 = signal<Producto>({ cantidad: 10, precio: 10 });
  producto2 = signal<Producto>({ cantidad: 20, precio: 10 });


  total = computed(() => {
    return this.producto1().cantidad * this.producto1().precio + this.producto2().cantidad * this.producto2().precio;
  });


}
