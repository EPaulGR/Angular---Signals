import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HydrationComponent } from './pages/hydration/hydration.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signals', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'signals', component: SignalsComponent },
      { path: 'hydration', component: HydrationComponent },

    ]
  },
  { path: '**', redirectTo: 'signals' },
];
