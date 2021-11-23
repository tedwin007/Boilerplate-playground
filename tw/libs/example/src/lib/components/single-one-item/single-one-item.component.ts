import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IOne } from '../../models/interfaces/one-item.interface';

@Component({
  selector: 'single-one-item',
  templateUrl: './single-one-item.component.html',
  styleUrls: ['./single-one-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleOneComponent {
  // todo: replace/define 'IOne' (empty)
  @Input() data?: IOne;
}
