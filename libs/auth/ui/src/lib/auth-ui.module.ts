import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import { AuthUiComponent } from './auth-ui.component';
import { authRoutes } from './auth-routes';
import { TuiButtonModule, TuiErrorModule, TuiLinkModule } from '@taiga-ui/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
    TuiInputModule,
    TuiErrorModule,
    TuiButtonModule,
    TuiLinkModule,
  ],
  declarations: [AuthUiComponent, AuthUiComponent],
})
export class AuthUiModule {}
