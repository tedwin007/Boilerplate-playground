import {HttpClient} from "@angular/common/http";
import {DomainApiConfig} from "./interfaces/domain-api.config.interface";
import {BaseAPI} from "./abstruct-api.class";

export abstract class AbstractDomainApi<T = DomainApiConfig> extends BaseAPI {
  protected config:DomainApiConfig;
  protected baseUrl: string;

  protected constructor(httpClient: HttpClient, baseUrl: string) {
    super(httpClient);
    this.baseUrl = baseUrl;
  }

}


