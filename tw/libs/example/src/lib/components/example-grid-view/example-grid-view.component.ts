import { Component, Input, OnInit } from '@angular/core';
import { AgGridEvent, ColDef } from 'ag-grid-community';

export enum GridStyleOf {
  Single = 'single-grid',
}

@Component({
  selector: 'tw-example-grid-view',
  template: `
    <ag-grid-angular
      class="ag-theme-alpine"
      [ngClass]="gridClass"
      [rowData]="rowData"
      (gridReady)="autoSize($event)"
      [frameworkComponents]="frameworkComponents"
      [columnDefs]="columnDefs"
    >
    </ag-grid-angular>
  `,
  styleUrls: ['./example-grid-view.component.scss'],
})
export class ExampleGridViewComponent implements OnInit {
  private _columnDefs: ColDef[];
  gridClass: GridStyleOf;
  frameworkComponents = {};
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

  setColumnDefs(value: ColDef[], cssClass?: GridStyleOf) {
    this._columnDefs = value;
    if (cssClass) {
      this.gridClass = cssClass;
    }
  }
}
