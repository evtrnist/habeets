import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupCardComponent } from './signup-card.component';
import { TuiButtonModule, TuiErrorModule, TuiLinkModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiFieldErrorPipeModule, TuiInputModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [SignupCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiLinkModule,
    TuiButtonModule,
  ],
  exports: [SignupCardComponent],
})
export class SignupCardModule {}
