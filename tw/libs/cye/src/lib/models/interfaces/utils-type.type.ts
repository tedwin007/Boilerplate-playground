import {FormControl, FormGroup} from "@angular/forms";
import {InjectionToken} from "@angular/core";
import {Observable, of} from "rxjs";
import {BaseFormClass} from "../classes/base-form.class";
import {Person} from "../../components/cye-form/partials/person-form/classes/person.class";
import {Employee} from "../../components/cye-form/partials/employee-form/classes/employee.class";

export type Nullable<T> = { [k in keyof T]: T[k] | null }
export type EntityFormGroup<T> = { [k in keyof T]: FormControl }

export interface WizardState {
  currentStep: number;
  isValid$: Observable<boolean>;
  steps: [Person,Employee],
  form: FormGroup
}

export const WizardToken: InjectionToken<WizardState> = new InjectionToken('WizardToken')

export interface HasForm {
  form: BaseFormClass<any>
}
