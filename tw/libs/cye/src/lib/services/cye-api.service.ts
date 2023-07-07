import {inject, Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IEmployee} from "../models/interfaces/employee.interface";
import {IApiResponse} from "../models/interfaces/api-response.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class CyeApiService {
  private baseUrl: string;
  httpClient = inject(HttpClient)

  constructor() {
    this.baseUrl = 'localhost:4200/api/v1'
  }

  /**
   * ### saveNewEmployee
   * POST: /employee
   *
   * Params:
   *  description: Created Employee object,
   */
  saveNewEmployee(params: IEmployee): Observable<IApiResponse<IEmployee>> {
    return this.httpClient
      .post<IApiResponse<IEmployee>>(this.baseUrl + '/employee', params, {observe: 'body'})
      .pipe(
        catchError((err) => {
          return throwError(() => new Error(err));
        })
      );
  }
}
