import {Component, OnInit} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {IDeviceGroup} from "../../models/interfaces/device-group.interface";
import {DevicesGroupContentService} from "../../devices-group-content.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'device-group-navigation',
  templateUrl: './device-group-navigation.component.html',
  styleUrls: ['./device-group-navigation.component.scss']
})
export class DeviceGroupNavigationComponent implements OnInit {
  groupsList$: Observable<IDeviceGroup[]>=of([])
  private _ngUnsubscribe = new Subject();

  constructor(private devicesGroupContentService: DevicesGroupContentService) {
  }

  ngOnInit() {
    this.groupsList$ = this.devicesGroupContentService.getState().pipe(takeUntil(this._ngUnsubscribe));
  }

  ngOnDestroy() {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete()
  }
}
