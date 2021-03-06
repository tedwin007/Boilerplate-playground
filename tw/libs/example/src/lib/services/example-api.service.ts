import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractDomainApi } from '@tw/shared';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ExampleApiService extends AbstractDomainApi {
  /**
   * ### getAPIList
   *
   *
   * Path: /apis
   *
   * Method: get
   *
   * Params:
   *
   *
   *  @example ``````
   */
  getAPIList(params: {}): Observable<any> {
    const query = new URLSearchParams(<any>params).toString();
    return this.httpClient
      .get<any>(this.baseUrl + '/apis' + query, { observe: 'body' })
      .pipe(
        catchError((err) => {
          return throwError(new Error(err));
        })
      );
  }

  /**
   * ### saveSomeData
   *
   *
   * Path: /apis
   *
   * Method: post
   *
   * Params:
   *
   *
   *  @example ``````
   */
  saveSomeData(params: {}): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + '/apis', params, { observe: 'body' })
      .pipe(
        catchError((err) => {
          return throwError(new Error(err));
        })
      );
  }

  constructor(
    private httpClient: HttpClient,
    apiURL = 'virtserver.swaggerhub.com/TidharWienreb/angular-api/1/'
  ) {
    super(httpClient, apiURL);
  }
}
