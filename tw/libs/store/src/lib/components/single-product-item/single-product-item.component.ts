import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ui-single-product-item',
  templateUrl: './single-product-item.component.html',
  styleUrls: ['./single-product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UIProductComponent {
  @Input() data: any = null;
}
