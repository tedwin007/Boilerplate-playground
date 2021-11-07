import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../apps/boilerplate/src/environments/environment';
import { AbstractDomainApi } from '@tw/shared';
import { APIMethods } from '@tw/shared';

type ExampleApis = {};

@Injectable()
export class ExampleApiService extends AbstractDomainApi<ExampleApis> {
  config: ExampleApis;
  call: APIMethods<ExampleApis>;
  constructor(private httpClient: HttpClient) {
    super(httpClient, environment.apiURL);
  }

  protected getApiConfig(): ExampleApis {
    return {};
  }
}
