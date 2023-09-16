import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'habeets-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {}
