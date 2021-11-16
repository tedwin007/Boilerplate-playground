import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { StoreFormComponent } from './components/store-form/store-form.component';
import { StoreGridViewComponent } from './components/store-grid-view/store-grid-view.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [StoreFormComponent, StoreGridViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  exports: [StoreFormComponent, StoreGridViewComponent],
})
export class StoreEntityModule {}
