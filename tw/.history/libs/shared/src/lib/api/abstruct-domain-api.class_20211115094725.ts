import { HttpClient } from "@angular/common/http";
import {BaseAPI} from "./abstruct-api.class";

export abstract class AbstractDomainApi extends BaseAPI {
  protected baseUrl: string;

  protected constructor(httpClient: HttpClient, baseUrl: string) {
    super(httpClient);
    this.baseUrl = baseUrl;
  }

}


