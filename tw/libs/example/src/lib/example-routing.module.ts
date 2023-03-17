import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OneListComponent} from './components/one-list/one-list.component';
import {SingleOneComponent} from './components/single-one-item/single-one-item.component';
import {ExampleGridViewComponent} from "./components/example-grid-view/example-grid-view.component";

const routes: Routes = [
  {path: '', component: ExampleGridViewComponent},
  {path: 'single-one/:id', component: SingleOneComponent},
  //todo: add 404 page
  {path: '**', component: OneListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {
}
