import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CyeRoutingModule} from './cye-routing.module';
import {CyeService} from './cye.service';
import {CyeComponent} from './cye.component';
import {PersonFormComponent} from "./components/person-form/person-form.component";
import {SharedModule} from "@tw/shared";
import {EmployeeFormComponent} from "./components/employee-form/employee-form.component";

@NgModule({
  declarations: [
    CyeComponent,
    PersonFormComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CyeRoutingModule,
  ],
  providers: [CyeService],
  exports: [
    CyeComponent,
    SharedModule,
    CyeRoutingModule,
    EmployeeFormComponent
  ],
})
export class CyeModule {
}
