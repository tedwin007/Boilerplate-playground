import {Observable} from "rxjs";

export type APIConfig = { url: string, option?: ApiCallOptions };

// todo: pullingService
export interface ApiCallOptions {
  usePulling: boolean;
}


export interface DomainApiConfig {
  //to fix any so it will support function
  [apiName: string]: APIConfig | any
}

