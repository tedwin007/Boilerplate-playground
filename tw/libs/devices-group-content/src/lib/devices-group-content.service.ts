import {Injectable} from '@angular/core';
import {StateManger} from '../../../shared/src/lib/services/state-manger-service';
import {DevicesGroupContentApiService} from "./services/devices-group-content-api.service";
import {IDeviceGroup} from "./models/interfaces/device-group.interface";
import {Observable} from "rxjs";


@Injectable()
export class DevicesGroupContentService extends StateManger<IDeviceGroup[]> {
  constructor(private api: DevicesGroupContentApiService) {
    super([]);
    api.call.fetchAllGroups().subscribe((data: IDeviceGroup[]) => {
      console.log("data", data)
      this.setState(data);

    })
  }

  getData(str:string): Observable<any> {
    return this.api.call.getAreaData(str);
  }
}
