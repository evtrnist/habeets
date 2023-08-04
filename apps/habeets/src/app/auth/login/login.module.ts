import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginCardModule } from './login-card/login-card.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, LoginCardModule],
})
export class LoginModule {}
