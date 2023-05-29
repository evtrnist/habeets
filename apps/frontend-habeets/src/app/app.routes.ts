import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('@habeets/auth/ui').then((m) => m.AuthUiModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
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
