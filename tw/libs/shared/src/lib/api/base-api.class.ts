import {HttpClient, HttpResponseBase} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseHttpConfig} from "./interfaces/domain-api.config.interface";
import {inject} from "@angular/core";


export abstract class BaseAPI {

  protected httpClient = inject(HttpClient)

  protected get<R = HttpResponseBase>(path: string): Observable<R> {
    return this.httpClient.get<R>(path)
  }

  protected post<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return this.httpClient.post<R>(path, data, {withCredentials: true});
  }

  protected put<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return this.httpClient.put<R>(path, data, {withCredentials: true});
  }

  protected delete<D, R = HttpResponseBase>(path: string, data?: BaseHttpConfig<D>): Observable<R> {
    return this.httpClient.delete<R>(path, data);
  }

}
