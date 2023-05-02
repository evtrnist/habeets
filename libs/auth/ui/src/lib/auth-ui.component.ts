import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import {
  EMAIL_CONTROL_ERROR,
  Error,
  PASSWORD_MIN_LENGTH,
  REQUIRED_PASSWORD_CONTROL_ERROR,
} from './errors';

@Component({
  selector: 'habeets-auth-ui',
  templateUrl: './auth-ui.component.html',
  styleUrls: ['./auth-ui.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthUiComponent {
  public readonly authForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  public submitted = false;

  constructor(private readonly formBuilder: FormBuilder) {}

  public get emailError(): TuiValidationError | null {
    return this.getError('email', {
      [Error.REQUIRED]: EMAIL_CONTROL_ERROR,
      [Error.EMAIL]: EMAIL_CONTROL_ERROR,
    });
  }

  public get passwordError(): TuiValidationError | null {
    return this.getError('password', {
      [Error.REQUIRED]: REQUIRED_PASSWORD_CONTROL_ERROR,
      [Error.MIN_LENGTH]: PASSWORD_MIN_LENGTH,
    });
  }

  public submit(form: FormGroup) {
    console.log(form);
  }

  private getError(
    controlName: string,
    errorsMap: Record<string, string>
  ): TuiValidationError | null {
    const control = this.authForm.get(controlName);
    if (!control || (!control.touched && !this.submitted)) {
      return null;
    }
    for (const [error, msg] of Object.entries(errorsMap)) {
      if (control.hasError(error)) {
        return new TuiValidationError(msg);
      }
    }
    return null;
  }
}
