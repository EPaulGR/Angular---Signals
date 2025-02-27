import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-exercises-signals',
  templateUrl: './exercises-signals.component.html',
  styleUrl: './exercises-signals.component.css',
  imports: [
    RouterOutlet,
    RouterModule,
  ],
})
export class ExercisesSignalsComponent {
  router = signal<string[]>([ 'level-1', 'level-2', 'level-3', 'level-4', 'level-5' ]);
}
