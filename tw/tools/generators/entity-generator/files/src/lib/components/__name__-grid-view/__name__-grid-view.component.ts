import { Component, Input, OnInit } from '@angular/core';
import {AgGridEvent, ColDef} from "ag-grid-community";
<%var obj = swaggerData['definitions']; %>
<%var keys = Object.keys(obj); %>

@Component({
  selector: 'tw-<%= name %>-grid-view',
  template: `
    <ag-grid-angular class="ag-theme-alpine" [ngClass]="gridClass" 
                     [rowData]="rowData"
                     (gridReady)="autoSize($event)"
                     [frameworkComponents]="frameworkComponents"
                     [columnDefs]="columnDefs">
    </ag-grid-angular>
  `,
  styleUrls: ['./<%= name %>-grid-view.component.scss']
})
export class <%= classify(name) %>GridViewComponent implements OnInit {
  private _columnDefs: ColDef[];
  gridClass: string;

  frameworkComponents = {}
  @Input() rowData = [];

  get columnDefs(): ColDef[] {
    return this._columnDefs;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.setColumnDefs([]);
  }

  autoSize(event: AgGridEvent): void {
    event.api.sizeColumnsToFit();
  }

  setColumnDefs(value: ColDef[],cssClass?:string) {
    this._columnDefs = value;
    if (cssClass){
      this.gridClass = cssClass
    }
  }

}
