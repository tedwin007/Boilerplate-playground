import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../../apps/boilerplate/src/environments/environment';
import {AbstractDomainApi, APIConfig, APIMethods} from '@tw/shared';
import {IDeviceGroup} from "../models/interfaces/device-group.interface";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";


type DevicesGroupContentApis = { fetchAllGroups: APIConfig, getAreaData: any };

@Injectable({providedIn: 'root'})
export class DevicesGroupContentApiService extends AbstractDomainApi<DevicesGroupContentApis> {
  call: APIMethods<DevicesGroupContentApis> = {
    fetchAllGroups: (): Observable<IDeviceGroup[]> => {
      const {fetchAllGroups} = this.config;
      return this.get<{ data: IDeviceGroup[] }>(fetchAllGroups.url).pipe(map((response: { data: IDeviceGroup[] }) => response.data));
    },
    getAreaData: (areaName: string) => {
      const url = this.config.getAreaData.call(this, areaName);
      console.log(url.url);
      return this.get<{ data: any[] }>(url.url).pipe(map((response: { data: any[] }) => response.data));
    }
  }

  constructor(private httpClient: HttpClient) {
    super(httpClient, environment.apiURL);
    this.baseUrl = 'assets/data';
  }

  protected getApiConfig(): DevicesGroupContentApis {
    return {
      fetchAllGroups: {
        url: 'assets/data/groups.json',
      },
      getAreaData(areaName: string) {
        console.log(this)
        return {url: `assets/data/${areaName}.json`}
      }
    };
  }
}
