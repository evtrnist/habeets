import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
