import {FormControl, FormGroup, Validators} from "@angular/forms"
import {BaseFormClass} from "../../../../../models/classes/base-form.class";
import {BaseEmployee, IEmployeeForm} from "../../../../../models/interfaces/employee.interface";

export class EmployeeForm extends BaseFormClass<BaseEmployee> {

  constructor(data?: BaseEmployee) {
    super(data)
  }

  toDomainArray(): string[] {
    const currentDomain = this._form.get('domain')?.value;
    if (typeof currentDomain === 'string') {
      return currentDomain.split(',')
    }
    return currentDomain || []
  }

  protected buildForm(data: BaseEmployee): FormGroup {
    return this.formBuilder.group<IEmployeeForm>({
      companyName: new FormControl(data.companyName, {
        nonNullable: true,
        validators: [Validators.required]
      }),
      domain: new FormControl(data.domain || null, {
        validators: [Validators.pattern("^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:.[a-zA-Z]{2,})+[^,\\s][^\\,]*[^,\\s]*$")]
      }),
      numOfEmployees: new FormControl(data.numOfEmployees || null)
    })
  }

}

