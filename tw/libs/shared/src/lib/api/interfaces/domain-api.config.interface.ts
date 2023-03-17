import {Observable} from "rxjs";
import {HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";

export type APIConfig = { url: string, option?: ApiCallOptions };

// todo: pullingService
export interface ApiCallOptions {
  usePulling: boolean;
}


export interface DomainApiConfig {
  //to fix any so it will support function
  [apiName: string]: APIConfig | any
}

export interface BaseHttpConfig<D> {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe: 'body';
  context?: HttpContext;
  params?: HttpParams | D & {
    [param: string]: string | number | boolean | (string | number | boolean)[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any | null;
}
