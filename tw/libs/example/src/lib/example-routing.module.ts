import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneListComponent } from './components/one-list/one-list.component';
import { SingleOneComponent } from './components/single-one-item/single-one-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/one-list', pathMatch: 'full' },
  { path: 'single-one/:id', component: SingleOneComponent },
  { path: 'one-list', component: OneListComponent },
  //todo: add 404 page
  { path: '**', component: OneListComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
