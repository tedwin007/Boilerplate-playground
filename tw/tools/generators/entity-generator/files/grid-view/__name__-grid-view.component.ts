import {Component, OnInit} from '@angular/core';
import {AgGridEvent, ColDef} from "ag-grid-community";
import {classify} from "@nrwl/workspace/src/utils/strings";

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
  columnDefs: ColDef[] = [
    <% Object.keys(json).forEach( function(prop){ %>{field: '<%- prop %>'},<%})%>
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  autoSize(event: AgGridEvent): void {
    event.api.sizeColumnsToFit()
  }


}
