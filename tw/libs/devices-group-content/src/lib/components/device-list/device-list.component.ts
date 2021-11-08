import {Component, OnDestroy, OnInit} from '@angular/core';
import {DevicesGroupContentService} from '../../devices-group-content.service';
import {Observable, Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit, OnDestroy {
  private _ngUnsubscirbe = new Subject();
  deviceState$?: Observable<any[]>;

  constructor(private devicesGroupContentService: DevicesGroupContentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.deviceState$ = this.devicesGroupContentService.getData(this.route?.snapshot?.routeConfig?.path || 'allData');
  }

  ngOnDestroy() {
    this._ngUnsubscirbe.next();
    this._ngUnsubscirbe.complete()
  }
}
