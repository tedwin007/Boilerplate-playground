import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeFormComponent} from "./components/employee-form/employee-form.component";

const routes: Routes = [
  {path: '', component: EmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyeRoutingModule {
}
