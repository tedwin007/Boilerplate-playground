import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@tw/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { CyeGridViewComponent } from './components/cye-grid-view/cye-grid-view.component';
import { CyeRoutingModule } from './cye-routing.module';
import { CyeFormListComponent } from './components/cye-form-list/cye-form-list.component';
import { SingleCyeFormComponent } from './components/single-cye-form-item/single-cye-form-item.component';
import { CyeService } from './cye.service';
import { CyeComponent } from './cye.component';
import { ApiResponseFormComponent } from './components/api-response-form/api-response-form.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

@NgModule({
  declarations: [
    ApiResponseFormComponent,
    PersonFormComponent,
    EmployeeFormComponent,
    SingleCyeFormComponent,
    CyeFormListComponent,
    CyeComponent,
    CyeGridViewComponent,
    CyeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CyeRoutingModule,
    AgGridModule.withComponents([]),
  ],
  providers: [CyeService],
  exports: [
    SharedModule,
    SingleCyeFormComponent,
    CyeGridViewComponent,
    CyeComponent,
  ],
})
export class CyeModule {}
