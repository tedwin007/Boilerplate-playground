import {Injectable} from '@angular/core';
import {StateManger} from '../../../shared/src/lib/services/state-manger-service';
import {DevicesGroupContentApiService} from "./services/devices-group-content-api.service";
import {IDeviceGroup} from "./models/interfaces/device-group.interface";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class DevicesGroupContentService extends StateManger<IDeviceGroup[]> {
  private _isTableViewActive$ = new BehaviorSubject(false)

  constructor(private api: DevicesGroupContentApiService) {
    super([]);
    api.call.fetchAllGroups().subscribe((data: IDeviceGroup[]) => {
      this.setState(data);

    })
  }

  getIsTableViewState(): Observable<boolean> {
    return this._isTableViewActive$.asObservable();
  }

  switchViewMode(isTableMode: boolean) {
    this._isTableViewActive$.next(isTableMode);
  }

  /**
   * Get Data
   * 'any' type => WIP (schematics)
   * @param str
   */
  getData(str: string): Observable<any> {
    return this.api.call.getAreaData(str);
  }
}
