import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeFormComponent} from "./components/employee-form/employee-form.component";
import {PersonFormComponent} from "./components/person-form/person-form.component";

const routes: Routes = [
  {path: '', component: PersonFormComponent},
  // todo: add routing guard
  {path: 'step-2', component: EmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyeRoutingModule {
}
