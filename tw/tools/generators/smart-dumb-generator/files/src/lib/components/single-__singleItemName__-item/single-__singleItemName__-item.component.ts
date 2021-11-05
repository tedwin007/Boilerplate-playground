import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {<%=classify(singleItemName)%>DataItem } from '../../models/class/<%=singleItemName%>-data.class';

@Component({
  selector: 'ui-<%= singleItemName%>-component',
  templateUrl: './single-<%= singleItemName%>-item.component.html',
  styleUrls: ['./single-<%= singleItemName%>-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UI<%=classify(singleItemName)%>Component {
  @Input() data: <%=classify(singleItemName)%>DataItem | null = null;
}
