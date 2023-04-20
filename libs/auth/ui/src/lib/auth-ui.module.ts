import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthUiComponent } from './auth-ui.component';
import { authRoutes } from './auth-routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authRoutes)],
  declarations: [AuthUiComponent, AuthUiComponent],
})
export class AuthUiModule {}
