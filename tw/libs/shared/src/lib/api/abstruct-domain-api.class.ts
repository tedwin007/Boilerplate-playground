import {HttpClient} from "@angular/common/http";
import {BaseAPI} from "./base-api.class";

export abstract class AbstractDomainApi extends BaseAPI {
  protected baseUrl: string;

  protected constructor(baseUrl: string) {
    super();
    this.baseUrl = baseUrl;
  }

}


