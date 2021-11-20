import { Injectable } from '@angular/core';
import { StateManger } from '../../../shared/src/lib/services/state-manger-service';

@Injectable()
export class ExampleService extends StateManger<any> {
  constructor() {
    super([]);
  }
}
