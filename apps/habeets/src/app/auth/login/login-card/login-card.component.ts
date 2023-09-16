import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { AuthService } from '../../auth-service';

@Component({
  selector: 'habeets-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginCardComponent {
  public readonly loginFormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [this.customRequiredValidator('Please enter your email')],
      updateOn: 'blur',
    }),
    password: new FormControl('', {
      validators: [this.customRequiredValidator('Please enter your password')],
      updateOn: 'blur',
    }),
  });

  constructor(private readonly authService: AuthService) {}

  public login(form: FormGroup) {
    const { email, password } = form.value;
    console.log(email, password);
    this.authService.login(email, password);
  }

  private customRequiredValidator(error = ''): (field: AbstractControl) => ValidationErrors | null {
    return (field: AbstractControl): ValidationErrors | null =>
      field.value ? null : { required: this.getRequiredError(error) };
  }

  private getRequiredError(error: string): TuiValidationError {
    return new TuiValidationError(error);
  }
}
