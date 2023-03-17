import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pet-strore-list',
  templateUrl: './pet-strore-list.component.html',
  styleUrls: ['./pet-strore-list.component.scss'],
})
export class PetStroreListComponent<T = any> implements OnInit {
  PetStroreState$?: Observable<T>;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.PetStroreState$ = this.storeService.getState();
  }
}
