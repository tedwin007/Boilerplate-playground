import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable()
export class ExampleStubService implements ExampleService {
  protected _state$: BehaviorSubject<any>;
  // todo (auto-generated)
  getState(): Observable<any> {
    return of('Method not implemented.');
  }

  // todo (auto-generated)
  setState(data: any): void {
    return of('Method not implemented.');
  }

  // todo (auto-generated)
  getValue() {
    return of('Method not implemented.');
  }
}
