import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractDomainApi } from '@tw/shared';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//todo
import type * as Models from '../models/classes/example.class';

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
  getAPIList(params: {}): Observable<typeof Models> {
    const query = new URLSearchParams(<any>params).toString();
    return this.httpClient
      .get<typeof Models>(this.baseUrl + '/apis' + query, { observe: 'body' })
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
  saveSomeData(params: {}): Observable<typeof Models> {
    return this.httpClient
      .post<typeof Models>(this.baseUrl + '/apis', params, { observe: 'body' })
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
