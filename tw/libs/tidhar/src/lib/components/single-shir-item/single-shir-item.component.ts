import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ui-single-shir-item',
  templateUrl: './single-shir-item.component.html',
  styleUrls: ['./single-shir-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UIShirComponent {
  @Input() data: any = null;
}
