import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../apps/boilerplate/src/environments/environment';
import { AbstractDomainApi } from '@tw/shared';
import { APIMethods } from '@tw/shared';

type Example2Apis = {};

@Injectable()
export class Example2ApiService extends AbstractDomainApi<Example2Apis> {
  config: Example2Apis;
  call: APIMethods<Example2Apis>;
  constructor(private httpClient: HttpClient) {
    super(httpClient, environment.apiURL);
  }

  protected getApiConfig(): Example2Apis {
    return {};
  }
}
