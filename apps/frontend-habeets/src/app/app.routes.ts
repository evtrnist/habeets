import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('@habeets/auth/ui').then((m) => m.AuthUiModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('@habeets/registration/ui').then((m) => m.RegistrationUiModule),
  },
  // {
  //   path: 'dashboard',
  // },
  // {
  //   path: 'profile',
  // },
  // {
  //   path: '**',
  // },
];
