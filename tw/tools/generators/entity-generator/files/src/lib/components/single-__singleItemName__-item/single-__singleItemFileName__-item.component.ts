import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ui-single-<%=dasherize(singleItemName)%>-item',
  templateUrl: './single-<%=dasherize(singleItemName)%>-item.component.html',
  styleUrls: ['./single-<%=dasherize(singleItemName)%>-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UI<%=classify(singleItemName)%>Component {
  // Auto-Generated : todo: define type
  @Input() data: any = null;
}
