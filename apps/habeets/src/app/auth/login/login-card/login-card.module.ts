import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiFieldErrorPipeModule, TuiInputModule } from '@taiga-ui/kit';
import { LoginCardComponent } from './login-card.component';
import { TuiButtonModule, TuiErrorModule, TuiLinkModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginCardComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TuiInputModule, TuiErrorModule, TuiFieldErrorPipeModule, TuiLinkModule, TuiButtonModule],
  exports: [LoginCardComponent],
})
export class LoginCardModule {}
