import {HttpResponseBase} from "@angular/common/http";
import {Observable} from "rxjs";

export type APIConfig = { url: string, option?: ApiCallOptions };

// todo: pullingService
export interface ApiCallOptions {
  usePulling: boolean;
}


export interface DomainApiConfig {
  [apiName: string]: APIConfig
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type APIMethods<T = object> = { [k in keyof T]: <D, R = HttpResponseBase>(data?: D) => Observable<R> }
