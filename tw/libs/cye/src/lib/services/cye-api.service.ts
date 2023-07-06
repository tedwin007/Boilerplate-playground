import {Injectable} from '@angular/core';
import {AbstractDomainApi} from '@tw/shared';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IEmployee} from "../models/interfaces/employee.interface";
import {IApiResponse} from "../models/interfaces/api-response.interface";

@Injectable({providedIn: 'root'})
export class CyeApiService extends AbstractDomainApi {
  constructor() {
    super('localhost:4200/api/v1');
  }

  /**
   * ### saveNewEmployee
   * POST: /employee
   *
   * Params:
   *  description: Created Employee object,
   */
  saveNewEmployee(params: IEmployee): Observable<IApiResponse> {
    return this.httpClient
      .post<IApiResponse>(this.baseUrl + '/employee', params, {observe: 'body'})
      .pipe(
        catchError((err) => {
          return throwError(() => new Error(err));
        })
      );
  }
}
