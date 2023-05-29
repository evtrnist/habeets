import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'habeets-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {}
