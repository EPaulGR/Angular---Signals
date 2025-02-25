import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { Persona } from '../../core/interfaces/personas';

@Component({
  selector: 'app-hydration',
  imports: [],
  templateUrl: './hydration.component.html',
  styleUrl: './hydration.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HydrationComponent implements OnInit {
  
  personas = signal<Persona[]>([
    { nombre: 'Juan', edad: 25, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'María', edad: 30, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Carlos', edad: 28, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Ana', edad: 22, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Pedro', edad: 35, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Laura', edad: 27, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Miguel', edad: 31, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Sofia', edad: 29, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'David', edad: 33, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Carmen', edad: 26, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'José', edad: 40, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Isabel', edad: 24, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Fernando', edad: 36, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Patricia', edad: 28, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Roberto', edad: 32, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Elena', edad: 29, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Raúl', edad: 34, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Lucía', edad: 27, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Alberto', edad: 38, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Mónica', edad: 31, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Javier', edad: 29, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Diana', edad: 25, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Ricardo', edad: 33, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Beatriz', edad: 28, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Gabriel', edad: 36, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Victoria', edad: 30, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Andrés', edad: 39, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Clara', edad: 26, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Daniel', edad: 35, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Julia', edad: 32, genero: 'Femenino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' },
    { nombre: 'Mario', edad: 37, genero: 'Masculino', url: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.pngd' }
  ])
  
  ngOnInit(): void {
    console.log('Hydration component initialized');  
  }

}
