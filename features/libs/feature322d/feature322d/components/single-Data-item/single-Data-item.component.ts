import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {DataDataItem } from '../../models/class/Data-data.class';

@Component({
  selector: 'ui-Data-component',
  templateUrl: './single-Data-item.component.html',
  styleUrls: ['./single-Data-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIDataComponent {
  @Input() data: DataDataItem | null = null;
}
