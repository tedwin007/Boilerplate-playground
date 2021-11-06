import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DayDataItem } from '../../models/class/day-data.class';

@Component({
  selector: 'ui-day-component',
  templateUrl: './single-day-item.component.html',
  styleUrls: ['./single-day-item.conponent.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UIDayComponent {
  @Input() data?: DayDataItem ;
}
