import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ui-single-<%=singleItemName%>-item',
  templateUrl: './single-<%= singleItemName%>-item.component.html',
  styleUrls: ['./single-<%= singleItemName%>-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UI<%=classify(singleItemName)%>Component {
  @Input() data: any = null;
}
