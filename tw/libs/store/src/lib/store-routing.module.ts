import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetStroreListComponent } from './components/pet-strore-list/pet-strore-list.component';
import {SinglePetStroreComponent} from "./components/single-PetStrore-item/single-pet-strore-item.component";

const routes: Routes = [
  { path: '', redirectTo: '/pet-strore-list', pathMatch: 'full' },
  { path: 'single-pet-strore/:id', component: SinglePetStroreComponent },
  { path: 'pet-strore-list', component: PetStroreListComponent },
  //todo: add 404 page
  { path: '**', component: PetStroreListComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
