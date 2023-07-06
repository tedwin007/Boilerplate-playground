import { Injectable } from '@angular/core';
import { StateManger } from '@tw/shared';
import { CyeApiService } from './services/cye-api.service';

@Injectable({ providedIn: 'root' })
export class CyeService extends StateManger<any> {
  constructor(private cyeService: CyeApiService) {
    super([]);
  }
}
