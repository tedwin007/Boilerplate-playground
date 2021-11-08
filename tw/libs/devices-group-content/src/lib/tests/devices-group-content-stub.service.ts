import { Injectable } from '@angular/core';
import { DeviceList } from './../models/types/device-list.type';
import { DevicesGroupContentService } from '../devices-group-content.service';

@Injectable()
export class DevicesGroupContentStubService extends DevicesGroupContentService {
  constructor(state: DeviceList = []) {
    super(<DeviceList[]>state);
  }
}
