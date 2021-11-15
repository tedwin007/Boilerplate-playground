import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractDomainApi } from '@tw/shared';
import { IRequestResponse } from './serviceOptions';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TidharApiService extends AbstractDomainApi {
  /**
   * ###  GetProducts
   *
   *
   * Path: /products
   *
   * Method: get
   *
   * Params:
   *
   *  latitude: number - description: Latitude component of location.,
   *
   *
   *
   *  longitude: number - description: Longitude component of location.,
   *
   *
   *
   *
   *  @example ``` ```
   *
   */
  getProductTypes(params: {
    latitude: number;
    longitude: number;
  }): Observable<IRequestResponse<any>> {
    const query = new URLSearchParams(<any>params).toString();
    return this.httpClient
      .get<IRequestResponse<any>>(this.baseUrl + '/products' + query, {
        observe: 'body',
      })
      .pipe(
        catchError((err) => {
          return throwError(new Error(err));
        })
      );
  }

  /**
   * ###  PostProducts
   *
   *
   * Path: /products
   *
   * Method: post
   *
   * Params:
   *
   *  latitude: number - description: Latitude component of location.,
   *
   *
   *
   *  longitude: number - description: Longitude component of location.,
   *
   *
   *
   *
   *  @example ``` ```
   *
   */
  postProductTypes(params: {
    latitude: number;
    longitude: number;
  }): Observable<IRequestResponse<any>> {
    return this.httpClient
      .post<IRequestResponse<any>>(this.baseUrl + '/products', params, {
        observe: 'body',
      })
      .pipe(
        catchError((err) => {
          return throwError(new Error(err));
        })
      );
  }

  constructor(private httpClient: HttpClient, apiURL = 'api.uber.com/v1/') {
    super(httpClient, apiURL);
  }
}
