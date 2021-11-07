import { Injectable } from '@angular/core';
import { DtList } from './../models/types/dt-list.type';
import { ExampleService } from '../example.service';

@Injectable()
export class ExampleStubService extends ExampleService {
  constructor(state: DtList = []) {
    super(<DtList[]>state);
  }
}
