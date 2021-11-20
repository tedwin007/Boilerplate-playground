import { Component, Input, OnInit } from '@angular/core';
import {AgGridEvent, ColDef} from "ag-grid-community";
<%var obj = swaggerData['definitions']; %>
<%var keys = Object.keys(obj); %>


export enum GridStyleOf {
<% keys.forEach(function (entity) { %>
<%=classify(entity)%>='<%=dasherize(entity)%>-grid',
      <%})%>
}


@Component({
  selector: 'tw-<%= dasherize(name) %>-grid-view',
  template: `
    <ag-grid-angular class="ag-theme-alpine" [ngClass]="gridClass" 
                     [rowData]="rowData"
                     (gridReady)="autoSize($event)"
                     [frameworkComponents]="frameworkComponents"
                     [columnDefs]="columnDefs">
    </ag-grid-angular>
  `,
  styleUrls: ['./<%= dasherize(name) %>-grid-view.component.scss']
})
export class <%= classify(name) %>GridViewComponent implements OnInit {
  private _columnDefs: ColDef[];
  gridClass: GridStyleOf;
  frameworkComponents = {}
  @Input() rowData = [];

  get columnDefs(): ColDef[] {
    return this._columnDefs;
  }

  ngOnInit(): void {
    this.setColumnDefs([]);
  }

  autoSize(event: AgGridEvent): void {
    event.api.sizeColumnsToFit();
  }

  setColumnDefs(value: ColDef[],cssClass?:GridStyleOf) {
    this._columnDefs = value;
    if (cssClass){
      this.gridClass = cssClass
    }
  }

}
