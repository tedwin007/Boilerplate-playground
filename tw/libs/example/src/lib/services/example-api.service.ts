import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractDomainApi } from '@tw/shared';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import type * as Models from '../models/classes/example.class';

@Injectable()
export class ExampleApiService extends AbstractDomainApi {
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
   *  @example ``````
   */
  getProductTypes(params: {
    latitude: number;
    longitude: number;
  }): Observable<typeof Models> {
    const query = new URLSearchParams(<any>params).toString();
    return this.httpClient
      .get<typeof Models>(this.baseUrl + '/products' + query, {
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
   *  @example ``````
   */
  postProductTypes(params: {
    latitude: number;
    longitude: number;
  }): Observable<typeof Models> {
    return this.httpClient
      .post<typeof Models>(this.baseUrl + '/products', params, {
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
