import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {IDeviceGroup} from "../../models/interfaces/device-group.interface";
import {DevicesGroupContentService} from "../../devices-group-content.service";

@Component({
  selector: 'device-group-navigation',
  templateUrl: './device-group-navigation.component.html',
  styleUrls: ['./device-group-navigation.component.scss']
})
export class DeviceGroupNavigationComponent implements OnInit {
  groupsList$: Observable<IDeviceGroup[]> = of([])

  constructor(private devicesGroupContentService: DevicesGroupContentService) {
  }

  ngOnInit() {
    this.groupsList$ = this.devicesGroupContentService.getState()
  }

}
