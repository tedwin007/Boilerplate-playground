import {Component, OnDestroy, OnInit} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {DevicesGroupContentService} from "../../devices-group-content.service";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs/operators";

@Component({
  selector: 'tw-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, OnDestroy {

  columnDefs: ColDef[] = [
    {field: 'Acknowledged'},
    {field: 'Severity', width:20},
    {field: 'Location'},
    {field: 'Title'},
    {field: 'Aggregated'},
  ];

  constructor(private devicesGroupContentService: DevicesGroupContentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.devicesGroupContentService.getData(this.route?.snapshot?.routeConfig?.path || 'allData')
      .pipe(take(1))
      .subscribe((data) => {
        this.rowData = data;
      });
  }

  rowData = [];

  ngOnDestroy(): void {
  }
}
