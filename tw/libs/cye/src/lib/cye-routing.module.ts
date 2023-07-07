import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CyeFormComponent} from "./components/cye-form/cye-form.component";
import {PersonFormComponent} from "./components/cye-form/partials/person-form/person-form.component";
import {EmployeeFormComponent} from "./components/cye-form/partials/employee-form/employee-form.component";
import {of} from "rxjs";
import {WizardToken} from "./models/interfaces/utils-type.type";


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      redirectTo: '/form',
      pathMatch: 'full'
    },
    {
      path: 'form',
      loadChildren: () => import('./components/cye-form/cye-form.module').then(m => m.CyeFormModule)
    },
  ])],
  exports: [RouterModule],
})
export class CyeRoutingModule {
}
