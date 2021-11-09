import {Component, OnInit} from '@angular/core';
import {AgGridEvent, ColDef} from "ag-grid-community";
import {DevicesGroupContentService} from "../../devices-group-content.service";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs/operators";
import {AgSeverityComponent} from "./ag-grid-components/ag-severity.component";
import {AgTagsComponent} from "./ag-grid-components/ag-tags.component";

@Component({
  selector: 'tw-table-view',
  template: `
    <ag-grid-angular class="ag-theme-alpine"
                     [rowData]="rowData"
                     [headerHeight]="0"
                     (gridReady)="autoSize($event)"
                     [frameworkComponents]="frameworkComponents"
                     [columnDefs]="columnDefs">
    </ag-grid-angular>
  `,
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  rowData = [];
  columnDefs: ColDef[] = [
    {field: 'Acknowledged'},
    {
      field: 'Severity',
      width: 20,
      cellRenderer: 'AgSeverityComponent'
    },
    {field: 'Location'},
    {
      field: 'Title',
      minWidth: 250,
    },
    {
      field: 'Aggregated',
      minWidth: 250,
      cellRenderer: 'AgTagsComponent'
    },
  ];

  frameworkComponents = {
    'AgSeverityComponent': AgSeverityComponent,
    'AgTagsComponent': AgTagsComponent
  };

  constructor(private devicesGroupContentService: DevicesGroupContentService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const path = this.route?.snapshot?.routeConfig?.path || 'allData';
    this.devicesGroupContentService.getData(path)
      .pipe(take(1))
      .subscribe(
        (data): void => this.rowData = data,
        (err): void => console.error(err)
      );
  }

  autoSize(event: AgGridEvent): void {
    event.api.sizeColumnsToFit()
  }

}
