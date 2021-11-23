import { Injectable } from '@angular/core';
import { StateManger } from '@tw/shared';
import { ExampleService } from './../example.service';
import { ExampleApiService } from './../services/example-api.service';

@Injectable()
export class ExampleStubService extends StateManger implements ExampleService {
  constructor(private example: ExampleApiService) {
    super([]);
  }
}
