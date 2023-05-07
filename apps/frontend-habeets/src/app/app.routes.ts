import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('@habeets/auth/ui').then((m) => m.AuthUiModule),
  },
  {
    path: 'dashboard',
  },
  {
    path: 'profile',
  },
  {
    path: '**',
  },
];
