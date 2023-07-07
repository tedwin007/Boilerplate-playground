import {inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {PersonFormComponent} from "./partials/person-form/person-form.component";
import {EmployeeFormComponent} from "./partials/employee-form/employee-form.component";
import {WizardToken} from "../../models/interfaces/utils-type.type";
import {CyeFormComponent} from "./cye-form.component";
import {createWizard} from "../../utils";

@NgModule({
  providers: [
    {
      provide: WizardToken,
      useFactory: () => createWizard()
    }
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
        {
          path: '',
          component: CyeFormComponent,
          children: [
            {
              path: '',
              component: PersonFormComponent
            },
            {
              path: 'step-1', component: EmployeeFormComponent,
              canActivate: [() => inject(WizardToken).steps[0].form.asFormGroup().valid
              ]
            }
          ]
        },
      ]
    ),
    FormsModule,
  ]
})
export class CyeFormModule {
}
