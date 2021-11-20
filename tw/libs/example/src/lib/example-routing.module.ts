import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YokoListComponent } from './components/yoko-list/yoko-list.component';
import { UIYokoComponent } from './components/single-yoko-item/single-yoko-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/yoko-list', pathMatch: 'full' },
  { path: 'single-yoko/:id', component: UIYokoComponent },
  { path: 'yoko-list', component: YokoListComponent },
  //todo: add 404 page
  { path: '**', component: YokoListComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
