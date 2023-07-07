import {inject, Injectable} from '@angular/core';
import {CyeApiService} from './services/cye-api.service';
import {IEmployee} from "./models/interfaces/employee.interface";
import { map, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {IApiResponse} from "./models/interfaces/api-response.interface";

@Injectable({providedIn: 'root'})
export class CyeService {
  cyeService: CyeApiService = inject(CyeApiService)

  postEmployee(employee: IEmployee): Observable<IApiResponse<IEmployee>> {
    return this.cyeService.saveNewEmployee({} as any).pipe(
      map(() => ({data: employee} as IApiResponse<IEmployee>)),
      catchError(() => (of({data: employee} as IApiResponse<IEmployee>)))
    )
  }
}
