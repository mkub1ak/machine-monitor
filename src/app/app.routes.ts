import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((module) => module.DashboardComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((module) => module.DashboardComponent),
  },
  {
    path: 'machine',
    loadComponent: () =>
      import('./machine/machine.component').then((module) => module.MachineComponent),
  },
  {
    path: 'measurements',
    loadComponent: () =>
      import('./measurements/measurements-component').then(
        (module) => module.MeasurementsComponent,
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./page-not-found/page-not-found-component').then(
        (module) => module.PageNotFoundComponent,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page-not-found/page-not-found-component').then(
        (module) => module.PageNotFoundComponent,
      ),
  },
];
