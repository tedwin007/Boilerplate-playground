import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ui-single-yoko-item',
  templateUrl: './single-yoko-item.component.html',
  styleUrls: ['./single-yoko-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UIYokoComponent {
  // Auto-Generated : todo: define type
  @Input() data: any = null;
}
