import {Component, OnInit} from '@angular/core';
import {DevicesGroupContentService} from '../../devices-group-content.service';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  deviceState$?: Observable<any[]>;
  isTableView$: Observable<boolean> = this.devicesGroupContentService.getIsTableViewActive();

  constructor(private devicesGroupContentService: DevicesGroupContentService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let routeConfig = this.route?.snapshot?.routeConfig;
    this.deviceState$ = this.devicesGroupContentService.getData(routeConfig?.path || 'allData');
  }

}
