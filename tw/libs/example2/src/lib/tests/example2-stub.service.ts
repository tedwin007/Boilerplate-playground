import { Injectable } from '@angular/core';
import { DtList } from './../models/types/dt-list.type';
import { Example2Service } from '../example2.service';

@Injectable()
export class Example2StubService extends Example2Service {
  constructor(state: DtList = []) {
    super(<DtList[]>state);
  }
}
