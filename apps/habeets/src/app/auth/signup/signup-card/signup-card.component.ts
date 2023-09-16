import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';

@Component({
  selector: 'habeets-signup-card',
  templateUrl: './signup-card.component.html',
  styleUrls: ['./signup-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupCardComponent {
  @Output() signupClicked = new EventEmitter<{email: string, password: string}>()
  public signupFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [this.customRequiredValidator('This field couldn\'t be empty')]),
    password: new FormControl('', [this.customRequiredValidator('This field couldn\'t be empty')]),
    repeatedPassword: new FormControl('', this.customRepeatedValidator('Passwords don\'t match')),
  });

  public signup(form: FormGroup) {
    const {email, password} = form.value
    this.signupClicked.emit({email, password});
  }

  private get passwordControl(): AbstractControl | null {
    return this.signupFormGroup?.get('password');
  }


  private customRequiredValidator(error = ''): (field: AbstractControl) => ValidationErrors | null {
    return (field: AbstractControl): ValidationErrors | null =>
      field.value ? null : { required: this.getError(error) };
  }


  private customRepeatedValidator(error = ''): (field: AbstractControl) => ValidationErrors | null {
    return (field: AbstractControl): ValidationErrors | null =>
      field.value === this.passwordControl?.value ? null : { required: this.getError(error) };
  }

  private getError(error: string): TuiValidationError {
    return new TuiValidationError(error);
  }
}
