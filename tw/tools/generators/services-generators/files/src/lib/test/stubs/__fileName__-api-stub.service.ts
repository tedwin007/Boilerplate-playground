import { Injectable } from '@angular/core';
import {HttpClient, HttpResponseBase} from "@angular/common/http";
import {Observable,of} from "rxjs";
import {<%=classify(name)%>ApiService} from "../../services/<%=dasherize(fileName)%>-api.service";

@Injectable()
export class <%=classify(name)%>ApiStubService implements <%=classify(name)%>ApiService {
  protected baseUrl: string;
  protected _httpClient: HttpClient;

  // todo (auto-generated)
  protected delete<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return of({});
  }

  // todo (auto-generated)
  protected get<R = HttpResponseBase>(path: string): Observable<R> {
    return of({});
  }

  // todo (auto-generated)
  protected post<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return of({});
  }

  // todo (auto-generated)
  protected put<D, R = HttpResponseBase>(path: string, data?: D): Observable<R> {
    return of({});
  }
}
