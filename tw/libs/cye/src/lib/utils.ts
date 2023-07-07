import {WizardState} from "./models/interfaces/utils-type.type";
import {Person} from "./components/cye-form/partials/person-form/classes/person.class";
import {Employee} from "./components/cye-form/partials/employee-form/classes/employee.class";
import {of} from "rxjs";
import {inject} from "@angular/core";
import {FormBuilder} from "@angular/forms";

export function createWizard(): WizardState {
  const person = new Person()
  const employee = new Employee();
  return ({
    currentStep: 0,
    steps: [person, employee],
    isValid$: of(false),
    form: inject(FormBuilder).group({
      person: person.form.asFormGroup(),
      employee: employee.form.asFormGroup()
    })
  });
}
