import {HttpClient, HttpResponseBase} from "@angular/common/http";
import {Observable} from "rxjs";


//todo: Can be redundant...
export abstract class BaseAPI {
  protected _httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  protected get<R = HttpResponseBase>(path: string): Observable<R> {
    return this._httpClient.get<R>(path)
  }

  protected post<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return this._httpClient.post<R>(path, data, {withCredentials: true});
  }

  protected put<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return this._httpClient.put<R>(path, data, {withCredentials: true});
  }

  protected delete<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return this._httpClient.delete<R>(path, data);
  }

}
