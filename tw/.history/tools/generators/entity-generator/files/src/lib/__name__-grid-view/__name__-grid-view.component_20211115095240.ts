import { Component, Input, OnInit } from '@angular/core';
import {AgGridEvent, ColDef} from "ag-grid-community";

@Component({
  selector: 'tw-<%= name %>-grid-view',
  template: `
    <ag-grid-angular class="ag-theme-alpine"
                     [rowData]="rowData"
                     (gridReady)="autoSize($event)"
                     [frameworkComponents]="frameworkComponents"
                     [columnDefs]="columnDefs">
    </ag-grid-angular>
  `,
  styleUrls: ['./<%= name %>-grid-view.component.scss']
})
export class <%= classify(name) %>GridViewComponent implements OnInit {
  frameworkComponents = {}
  @Input() rowData = [];
  columnDefs: ColDef[];

  <%var obj = swaggerData['definitions']; %>
    <%var keys = Object.keys(obj); %>

      <% keys.forEach(function (entity) { %>
        private _column <%=entity %> Defs: ColDef[] = [
          <% Object.keys(obj[entity]['properties']).forEach(function (propName) { %>
            { field: '<%=propName%>' },
            <% }) %>
        ]
          <% }) %>


  constructor() {
    this.columnDefs = <any>[]
  }

  ngOnInit(): void {
  }

  autoSize(event: AgGridEvent): void {
    event.api.sizeColumnsToFit();
  }


}
