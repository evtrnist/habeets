import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'habeets-signup-card',
  templateUrl: './signup-card.component.html',
  styleUrls: ['./signup-card.component.less'],
})
export class SignupCardComponent {
  public signupFormGroup: FormGroup
}
