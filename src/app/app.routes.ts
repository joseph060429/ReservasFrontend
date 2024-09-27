import { Routes } from '@angular/router';

export const routes: Routes = [
  // Cuando la ruta esta vacía que me redirija a home
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Rutas para ir a home
  {
    path: 'home',
    loadChildren: () =>
      import('./routes/home.routes').then((m) => m.HOME_ROUTES),
  },

  // Rutas para el Login y Registro
  {
    path: '',
    loadChildren: () =>
      import('./routes/auth.routes').then((m) => m.AUTH_ROUTES),
  },
];
