import {Component} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";

@Component({
  selector: 'ag-tags',
  template: `<span><tw-tags [tags]="cellValue"></tw-tags></span>`,
})
export class AgTagsComponent {
  cellValue: string = ''

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams) {
    // set value into cell again
    this.cellValue = this.getValueToDisplay(params);
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

}
