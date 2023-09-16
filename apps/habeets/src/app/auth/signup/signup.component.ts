import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'habeets-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {
  constructor(private readonly authService: AuthService) {}


  public signup({email, password}: {email: string, password: string}) {
    this.authService.signup({email, password});
  }
}
