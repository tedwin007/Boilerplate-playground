import {Injectable} from '@angular/core';
import {AbstractDomainApi} from "../../../shared/src/lib/api/abstruct-domain-api.class";
import {
  APIConfig,
  APIMethods,
  DomainApiConfig
} from "../../../shared/src/lib/api/interfaces/domain-api.config.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../apps/boilerplate/src/environments/environment";
import {Observable} from "rxjs";
import {DayDataItem} from "./models/class/day-data.class";

type ForecastApis = {
  getDayForecast: APIConfig,
  getWeeklyForecast: APIConfig
};

@Injectable()
export class ForecastAPIService extends AbstractDomainApi<ForecastApis> {
  call: APIMethods<ForecastApis> = {
    getDayForecast: this.getDayForecast.bind(this),
    getWeeklyForecast: this.getWeeklyForecast.bind(this)
  }

  constructor(private httpClient: HttpClient) {
    super(httpClient, environment.apiURL);
  }

  protected getApiConfig(): DomainApiConfig {
    return {
      getDayForecast: {url: this.getJoinedURL('daily/...')},
      getWeeklyForecast: {url: this.getJoinedURL('weekly/..')}
    }
  }

  private getDayForecast(params: { date: string }): Observable<DayDataItem> {
    const {getDayForecast} = this.config
    const queryParams: URLSearchParams = new URLSearchParams(params.date);
    const url = queryParams ? getDayForecast.url + queryParams.toString() : getDayForecast.url;
    return this.get<DayDataItem>(url);
  }

  private getWeeklyForecast(): Observable<DayDataItem[]> {
    const {getWeeklyForecast} = this.config
    return this.get<DayDataItem[]>(getWeeklyForecast.url);
  }
}
