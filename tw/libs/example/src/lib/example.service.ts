import { Injectable } from '@angular/core';
import { StateManger } from '@tw/shared';
import { ExampleApiService } from './services/example-api.service';

@Injectable()
export class ExampleService extends StateManger<any> {
  constructor(private example: ExampleApiService) {
    super([]);
  }
}
