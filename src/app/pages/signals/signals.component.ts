import { Component, computed, signal } from '@angular/core';
import { Signal1Component } from './signal1/signal1.component';
import { Signal2Component } from './signal2/signal2.component';
import { Producto } from '../../core/interfaces/contador';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  imports: [
    Signal1Component,
    Signal2Component,
  ],
})
export class SignalsComponent {

    productoNoSignal = { cantidad: 15, precio: 15 };
    producto1 = signal<Producto>({ cantidad: 10, precio: 10 });
    producto2 = signal<Producto>({ cantidad: 20, precio: 10 });
      
    get totalNoSignal() {
      return this.productoNoSignal.cantidad * this.productoNoSignal.precio;
    }
    
    total = computed(() => {
      return this.producto1().cantidad * this.producto1().precio +
             this.producto2().cantidad * this.producto2().precio;
    });
    

}
