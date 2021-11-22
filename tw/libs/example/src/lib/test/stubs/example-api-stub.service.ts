import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ExampleApiService } from '../../services/example-api.service';

@Injectable()
export class ExampleApiStubService implements ExampleApiService {
  protected baseUrl: string;
  protected _httpClient: HttpClient;

  // todo (auto-generated)
  protected delete<D, R = HttpResponseBase>(
    path: string,
    data?: D
  ): Observable<R> {
    return of({});
  }

  // todo (auto-generated)
  protected get<R = HttpResponseBase>(path: string): Observable<R> {
    return of({});
  }

  // todo (auto-generated)
  protected post<D, R = HttpResponseBase>(
    path: string,
    data?: D
  ): Observable<R> {
    return of({});
  }

  // todo (auto-generated)
  protected put<D, R = HttpResponseBase>(
    path: string,
    data?: D
  ): Observable<R> {
    return of({});
  }

  getAPIList(params: {}): Observable<typeof Models> {
    return undefined;
  }

  saveSomeData(params: {}): Observable<typeof Models> {
    return undefined;
  }
}
