import {FormControl, FormGroup, Validators} from "@angular/forms"
import {BaseFormClass} from "../../../models/classes/base-form.class";
import {IPerson, IPersonForm} from "../../../models/interfaces/person.interface";
import {BaseEmployee, IEmployeeForm} from "../../../models/interfaces/employee.interface";
import {debounceTime, distinctUntilChanged, Observable, startWith, tap} from "rxjs";
import {inject} from "@angular/core";
import {CyeService} from "../../../cye.service";

export class EmployeeForm extends BaseFormClass<BaseEmployee> {
  cyeService = inject(CyeService)

  constructor(data?: BaseEmployee) {
    super(data)
  }

  getStateOnChanges$(): Observable<BaseEmployee> {
    return this._form.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(250),
      startWith(this._form.value),
      tap((data: BaseEmployee) => this.cyeService.setState([this.cyeService.getValue()[0], data])
      )
    )
  }

  protected buildForm(data?: BaseEmployee): FormGroup {
    return this.formBuilder.group<IEmployeeForm>({
      companyName: new FormControl(data?.companyName ?? '', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      domain: new FormControl(data?.domain || ""),
      numOfEmployees: new FormControl((data?.numOfEmployees ?? null) || '')
    })
  }

}
