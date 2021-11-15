import {HttpClient} from "@angular/common/http";
import {DomainApiConfig} from "./interfaces/domain-api.config.interface";
import {BaseAPI} from "./abstruct-api.class";

export abstract class AbstractDomainApi extends BaseAPI {
  protected baseUrl: string;

  protected constructor(httpClient: HttpClient, baseUrl: string) {
    super(httpClient);
    this.baseUrl = baseUrl;
  }

}


