import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store.service';
import { ProductList } from '../../../models/types/product-list.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent<T = any> implements OnInit {
  productState$?: Observable<T>;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.productState$ = this.storeService.getState();
  }
}
