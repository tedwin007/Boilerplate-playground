import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { TidharFormComponent } from './tidhar-form/tidhar-form.component';
import { TidharGridViewComponent } from './tidhar-grid-view/tidhar-grid-view.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [TidharFormComponent, TidharGridViewComponent],
  imports: [CommonModule, ReactiveFormsModule, AgGridModule.withComponents([])],
  exports: [TidharFormComponent, TidharGridViewComponent],
})
export class TidharEntityModule {}
