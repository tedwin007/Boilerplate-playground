import {HttpClient, HttpResponseBase} from "@angular/common/http";
import {Observable} from "rxjs";


//todo: Can be redundant...
export abstract class BaseAPI {
  private _httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
    // todo add validation to path
  }

  protected  get<R = HttpResponseBase>(path: string): Observable<R>  {
    return this._httpClient.get<R>(path, {withCredentials: true})
  }

  protected post<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return this._httpClient.post<R>(path, data);
  }

  protected put<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return this._httpClient.put<R>(path, data);
  }

  protected delete<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return this._httpClient.delete<R>(path, data);
  }

}
