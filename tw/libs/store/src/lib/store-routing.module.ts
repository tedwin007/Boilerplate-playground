import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UIProductComponent } from './components/single-product-item/single-product-item.component';

const routes: Routes = [
  { path: 'single-product/:id', component: UIProductComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: '**', component: ProductListComponent }, // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
