import {HttpClient} from "@angular/common/http";
import {APIMethods, DomainApiConfig} from "./interfaces/domain-api.config.interface";
import {BaseAPI} from "./abstruct-api.class";

export abstract class AbstractDomainApi<T = DomainApiConfig> extends BaseAPI {
  protected config = this.getApiConfig();
  protected baseUrl: string;
  abstract call: APIMethods<T>;

  protected abstract getApiConfig(): DomainApiConfig;

  constructor(httpClient: HttpClient, baseUrl: string) {
    super(httpClient);
    this.baseUrl = baseUrl;

  }

}


