import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardComponent } from './login-card.component';

@NgModule({
  declarations: [LoginCardComponent],
  imports: [CommonModule],
  exports: [LoginCardComponent]
})
export class LoginCardModule {}
