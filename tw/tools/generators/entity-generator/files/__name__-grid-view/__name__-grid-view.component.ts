import {Component, OnInit} from '@angular/core';
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
  rowData = [];
  columnDefs: ColDef[] = <%- JSON.stringify(grid.columns) %>;

  constructor() {
  }

  ngOnInit(): void {
  }

  autoSize(event: AgGridEvent): void {
    event.api.sizeColumnsToFit()
  }


}
