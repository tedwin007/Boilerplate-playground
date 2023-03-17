import { Injectable } from '@angular/core';
import { StateManger } from '@tw/shared';
import { StoreService } from './../store.service';
import { StoreApiService } from './../services/store-api.service';

@Injectable()
export class StoreStubService extends StateManger implements StoreService {
  constructor(private storeService: StoreApiService) {
    super([]);
  }
}
