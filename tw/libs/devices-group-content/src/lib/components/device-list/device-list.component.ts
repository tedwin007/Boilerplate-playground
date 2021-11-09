import {Component, OnInit} from '@angular/core';
import {DevicesGroupContentService} from '../../devices-group-content.service';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'device-list',
  template: `
    <div class="container-fluid">
      <div class="d-flex row">
        <ng-container *ngIf="!(isTableView$ |async);else CardView ">
          <tw-table-view></tw-table-view>
        </ng-container>
      </div>
    </div>

    <ng-template #CardView>
      <div class="col-xs-12 col-sm-12 col-lg-4 pb-5" *ngFor="let item of deviceState$ | async as device">
        <ui-device-component [data]="item"></ui-device-component>
      </div>
    </ng-template>
  `
})
export class DeviceListComponent implements OnInit {
  deviceState$?: Observable<any[]>;
  isTableView$: Observable<boolean> = this.devicesGroupContentService.getIsTableViewState();

  constructor(private devicesGroupContentService: DevicesGroupContentService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let routeConfig = this.route?.snapshot?.routeConfig;
    this.deviceState$ = this.devicesGroupContentService.getData(routeConfig?.path || 'allData');
  }

}
