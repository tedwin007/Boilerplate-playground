import {FormControl, Validators} from "@angular/forms"
import {BaseFormClass} from "../../../models/classes/base-form.class";
import {BaseEmployee, IEmployeeForm} from "../../../models/interfaces/employee.interface";

export class Employee extends BaseFormClass<BaseEmployee> {

  constructor(data?: BaseEmployee) {
    super(data)
  }

  protected init(data?: BaseEmployee): void {
    this._form = this.formBuilder.group<IEmployeeForm>({
      companyName: new FormControl(data.companyName ?? '', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      domain: new FormControl(data.domain || null),
      numOfEmployees: new FormControl(data.numOfEmployees || null)
    })
  }

  static create(): BaseEmployee {
    return {
      companyName: null,
      domain: null,
      numOfEmployees: null,
    }
  }
}
