import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DtListComponent } from './components/dt-list/dt-list.component';
import { UIDtComponent } from './components/single-dt-item/single-dt-item.component';

const routes: Routes = [
  { path: 'single-dt', component: UIDtComponent },
  { path: 'multi-dt', component: DtListComponent },
  { path: '**', component: DtListComponent }, // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
