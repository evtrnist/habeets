import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'habeets-auth-ui',
  templateUrl: './auth-ui.component.html',
  styleUrls: ['./auth-ui.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthUiComponent {}
