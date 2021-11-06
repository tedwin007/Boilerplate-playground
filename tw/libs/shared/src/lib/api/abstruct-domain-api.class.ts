import {HttpClient} from "@angular/common/http";
import {APIMethods, DomainApiConfig} from "./interfaces/domain-api.config.interface";
import {BaseAPI} from "./abstruct-api.class";

export abstract class AbstructDomainApi<T = DomainApiConfig> extends BaseAPI {
  name: string;
  abstract config: T;
  abstract domainApis: APIMethods<T>;

  constructor(httpClient: HttpClient,
              domainPath: string,
              domainName: string = domainPath) {
    super(httpClient, domainPath);
    this.name = domainName;
  }
}

