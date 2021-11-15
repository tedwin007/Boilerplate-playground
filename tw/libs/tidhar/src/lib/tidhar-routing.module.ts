import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShirListComponent } from './components/shir-list/shir-list.component';
import { UIShirComponent } from './components/single-shir-item/single-shir-item.component';

const routes: Routes = [
  { path: 'single-shir', component: UIShirComponent },
  { path: 'multi-shir', component: ShirListComponent },
  { path: '**', component: ShirListComponent }, // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TidharRoutingModule {}
