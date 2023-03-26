import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {I<%=classify(singleItemName)%>} from '../../models/interfaces/<%=dasherize(singleItemName)%>.interface';

@Component({
  selector: 'single-<%=dasherize(singleItemName)%>-item',
  templateUrl: './single-<%=dasherize(singleItemName)%>-item.component.html',
  styleUrls: ['./single-<%=dasherize(singleItemName)%>-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Single<%=classify(singleItemName)%>Component {
  @Input() data?: I<%=classify(singleItemName)%>;
}
