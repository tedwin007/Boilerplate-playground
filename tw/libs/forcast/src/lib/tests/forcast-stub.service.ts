import { Injectable } from '@angular/core';
import { DayList } from './../models/types/day-list.type';
import { ForecastService } from '../forecast.service';

@Injectable()
export class ForcastStubService extends ForecastService {
  constructor(state: DayList = []) {
    super(<DayList[]>state);
  }
}
