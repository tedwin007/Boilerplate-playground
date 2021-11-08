import {Injectable} from '@angular/core';
import {StateManger} from "../../../shared/src/lib/services/state-manger-service";
import {DayList} from "./models/types/day-list.type";
import {ForecastAPIService} from "./forecast-api.service";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {DayDataItem} from "./models/class/day-data.class";

@Injectable()
export class ForecastService extends StateManger<DayList> {

  constructor(private apiService: ForecastAPIService) {
    super(<DayList>[]);
  }

  /**
   * Example for overriding the "getState",
   * I think this specific example should be done in the consumed component
   */
  getState(): Observable<DayDataItem[]> {
    return super.getState()
      .pipe(map((item: DayList) => item.map((data: DayDataItem) => new DayDataItem(data))));
  }



}
