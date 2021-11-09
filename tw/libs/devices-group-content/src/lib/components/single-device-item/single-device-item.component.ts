import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ui-device-component',
  template: `
    <div class="device-card-title">
      <p><i class="mr-2 {{data.Severity | severity}}"></i>{{data.Location}}</p>
    </div>
    <small class="device-card-title">{{data.Title}}</small>
    <tw-tags [tags]="data.Aggregated"></tw-tags>
  `,
  styleUrls: ['./single-device-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UIDeviceComponent {
  @Input() data: any | null = null;
}
