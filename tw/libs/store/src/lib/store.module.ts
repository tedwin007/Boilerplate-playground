import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UIProductComponent } from './components/single-product-item/single-product-item.component';
import { StoreService } from './store.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store.component';
import { StoreEntityModule } from './Store-entity.module';

@NgModule({
  declarations: [UIProductComponent, ProductListComponent, StoreComponent],
  imports: [
    StoreEntityModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreRoutingModule,
  ],
  providers: [StoreService],
  exports: [UIProductComponent],
})
export class StoreModule {}
