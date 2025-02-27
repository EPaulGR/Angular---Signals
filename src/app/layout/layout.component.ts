import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  imports: [
    RouterOutlet,
    RouterModule,
  ],
})

export class LayoutComponent {
  router = signal<string[]>([ 'hydration', 'signals', 'exercises-signals' ]);
}
