import { Injectable } from '@angular/core';
import { DtList } from './models/types/dt-list.type';
import { StateManger } from '../../../shared/src/lib/services/state-manger-service';

@Injectable()
export class ExampleService extends StateManger<DtList[]> {
  constructor(state: DtList = []) {
    super(<DtList[]>state);
  }
}
