import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'habeets-auth-ui',
  templateUrl: './auth-ui.component.html',
  styleUrls: ['./auth-ui.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthUiComponent {
  public authForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });
}
