import {Component, OnInit} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {DevicesGroupContentService} from "../../devices-group-content.service";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs/operators";
import {AgSeverityComponent} from "./ag-grid-components/ag-severity/ag-severity.component";
import {AgTagsComponent} from "./ag-grid-components/ag-tags/ag-tags.component";

@Component({
  selector: 'tw-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  rowData = [];
  columnDefs: ColDef[] = [
    {field: 'Acknowledged'},
    {field: 'Severity', width: 20, cellRenderer: 'AgSeverityComponent'},
    {field: 'Location'},
    {field: 'Title'},
    {
      field: 'Aggregated',
      width: 250,
      cellRenderer: 'AgTagsComponent'
    },
  ];

  constructor(private devicesGroupContentService: DevicesGroupContentService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.devicesGroupContentService.getData(this.route?.snapshot?.routeConfig?.path || 'allData')
      .pipe(take(1))
      .subscribe((data) => {
        this.rowData = data;
      });
  }

  frameworkComponents = {
    'AgSeverityComponent': AgSeverityComponent,
    'AgTagsComponent': AgTagsComponent
  };

}
