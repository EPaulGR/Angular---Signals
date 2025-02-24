import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../interfaces/contador';

@Component({
  selector: 'app-noSignal',
  imports: [],
  templateUrl: './noSignal.component.html',
  styleUrl: './noSignal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoSignalComponent implements OnInit {
  
  @Input() producto: Producto = { cantidad: 0, precio: 0 };
  @Output() productoChange = new EventEmitter<any>();
  
  ngOnInit(): void {
    // setTimeout(() => {
      //   this.incrementar2();
      // }, 1000);
  }
    


  incrementar2() {
    this.producto.cantidad++;
    this.productoChange.emit(this.producto);
  }

  decrementar2() {
    this.producto.cantidad--;
    this.productoChange.emit(this.producto);
  }


}
