import { Routes } from '@angular/router';
import { HydrationComponent } from './pages/hydration/hydration.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { LayoutComponent } from './layout/layout.component';
import { ExercisesSignalsComponent } from './pages/exercises-signals/exercises-signals.component';
import { Level1Component } from './pages/exercises-signals/levels/level-1/level-1.component';
import { Level2Component } from './pages/exercises-signals/levels/level-2/level-2.component';
import { Level3Component } from './pages/exercises-signals/levels/level-3/level-3.component';
import { Level4Component } from './pages/exercises-signals/levels/level-4/level-4.component';
import { Level5Component } from './pages/exercises-signals/levels/level-5/level-5.component';

export const routes: Routes = [
  { path: '', redirectTo: 'hydration', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'signals', component: SignalsComponent },
      { path: 'hydration', component: HydrationComponent },
      { 
        path: 'exercises-signals',
        component: ExercisesSignalsComponent,
        children: [
          { path: 'level-1', component: Level1Component },
          { path: 'level-2', component: Level2Component },
          { path: 'level-3', component: Level3Component },
          { path: 'level-4', component: Level4Component },
          { path: 'level-5', component: Level5Component },
        ],
      }
    ]
  },
  { path: '**', redirectTo: 'hydration' },
];
