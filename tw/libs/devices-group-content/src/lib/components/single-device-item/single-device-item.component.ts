import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ui-device-component',
  templateUrl: './single-device-item.component.html',
  styleUrls: ['./single-device-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UIDeviceComponent {
  @Input() data: any | null = null;
}
