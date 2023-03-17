import { Injectable } from '@angular/core';
import { StateManger } from '@tw/shared';
import { UserApiService } from './services/user-api.service';

@Injectable()
export class StoreService extends StateManger<any> {
  constructor(private storeService: UserApiService) {
    super([]);
  }
}
