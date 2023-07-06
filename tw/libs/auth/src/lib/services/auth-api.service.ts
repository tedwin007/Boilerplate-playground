import {Injectable} from '@angular/core';
import {AbstractDomainApi} from '@tw/shared';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IUserAuth} from "../models/interfaces/user-auth.interface";
import {IApiResponse} from "../models/interfaces/api-response.interface";

@Injectable({providedIn: 'root'})
export class AuthApiService extends AbstractDomainApi {
  constructor() {
    super('localhost:4200/api/v1');
  }

  /**
   * ## Auth
   *
   * /login:post
   *
   * Params:
   *  body:IUserAuth  - description: username and password,
   */
  auth(params: IUserAuth): Observable<IApiResponse> {
    return this.httpClient
      .post<IApiResponse>(this.baseUrl + '/login', params, {observe: 'body'})
      .pipe(
        catchError((err) => {
          return of({} as any)
          // return throwError(() => new Error(err));
        })
      );
  }
}
