import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@tw/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreGridViewComponent } from './components/store-grid-view/store-grid-view.component';
import { StoreRoutingModule } from './store-routing.module';
import { PetStroreListComponent } from './components/pet-strore-list/pet-strore-list.component';
import { StoreService } from './store.service';
import { StoreComponent } from './store.component';
import { AgGridModule } from 'ag-grid-angular';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ApiResponseFormComponent } from './components/api-response-form/api-response-form.component';
import {SinglePetStroreComponent} from "./components/single-PetStrore-item/single-pet-strore-item.component";

@NgModule({
  declarations: [
    UserFormComponent,
    ApiResponseFormComponent,
    SinglePetStroreComponent,
    PetStroreListComponent,
    StoreComponent,
    StoreGridViewComponent,
    StoreComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    StoreRoutingModule,
    AgGridModule.withComponents([]),
  ],
  providers: [StoreService],
  exports: [
    SharedModule,
    SinglePetStroreComponent,
    StoreGridViewComponent,
    StoreComponent,
  ],
})
export class StoreModule {
}
