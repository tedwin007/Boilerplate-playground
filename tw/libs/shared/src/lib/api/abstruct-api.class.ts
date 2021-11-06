import {HttpClient, HttpResponseBase} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class BaseAPI {
  private readonly API_URL: string = '/api/v1/';
  private _httpClient: HttpClient;

  constructor(httpClient: HttpClient, path: string) {
    this._httpClient = httpClient;
    // todo add validation to path
    this.API_URL += path;
  }

  get<R = HttpResponseBase>(path: string): Observable<R>  {
    return this._httpClient.get<R>(path, {withCredentials: true})
  }

  post<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return this._httpClient.post<R>(path, data);
  }

  put<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return this._httpClient.put<R>(path, data);
  }

  delete<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return this._httpClient.delete<R>(path, data);
  }

}
