import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DtDataItem } from '../../models/class/dt-data.class';

@Component({
  selector: 'ui-dt-component',
  templateUrl: './single-dt-item.component.html',
  styleUrls: ['./single-dt-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UIDtComponent {
  @Input() data: DtDataItem | null = null;
}
