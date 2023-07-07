import {Injectable} from '@angular/core';
import {StateManger} from '@tw/shared';
import {CyeApiService} from './services/cye-api.service';
import {IPerson} from "./models/interfaces/person.interface";
import {BaseEmployee, IEmployee} from "./models/interfaces/employee.interface";
import {finalize, map, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {IApiResponse} from "./models/interfaces/api-response.interface";
import {Person} from "./components/person-form/classes/person.class";
import {Employee} from "./components/employee-form/classes/employee.class";

@Injectable({providedIn: 'root'})
export class CyeService extends StateManger<[IPerson, BaseEmployee]> {
  constructor(private cyeService: CyeApiService) {
    super([Person.generate(), Employee.generate()]);
  }

  postEmployee(employee: IEmployee): Observable<IApiResponse<IEmployee>> {
    return this.cyeService.saveNewEmployee({} as any).pipe(
      map(() => ({data: employee} as IApiResponse<IEmployee>)),
      catchError(() => (of({data: employee} as IApiResponse<IEmployee>))),
      finalize(() => console.dir(this.getValue()))
    )
  }
}
