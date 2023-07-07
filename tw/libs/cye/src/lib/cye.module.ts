import {inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CyeRoutingModule} from './cye-routing.module';
import {CyeService} from './cye.service';
import {CyeComponent} from './cye.component';
import {SharedModule} from "@tw/shared";
import {CyeFormComponent} from './components/cye-form/cye-form.component';
import {PersonFormComponent} from "./components/cye-form/partials/person-form/person-form.component";
import {EmployeeFormComponent} from "./components/cye-form/partials/employee-form/employee-form.component";
import {CyeFormModule} from "./components/cye-form/cye-form.module";

@NgModule({
  declarations: [
    CyeComponent,
    PersonFormComponent,
    EmployeeFormComponent,
    CyeFormComponent
  ],
  imports: [
    CommonModule,
    CyeFormModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CyeRoutingModule,
  ],
  providers: [
    CyeService,
  ],
  exports: [
    CyeComponent,
    SharedModule,
    CyeRoutingModule,
    EmployeeFormComponent
  ],
})
export class CyeModule {
}
