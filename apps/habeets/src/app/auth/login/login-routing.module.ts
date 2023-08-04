import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';

const routes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
