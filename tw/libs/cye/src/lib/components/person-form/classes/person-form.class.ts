import {FormControl, FormGroup, Validators} from "@angular/forms"
import {BaseFormClass} from "../../../models/classes/base-form.class";
import {IPerson, IPersonForm} from "../../../models/interfaces/person.interface";
import {debounceTime, distinctUntilChanged, Observable, startWith, tap} from "rxjs";
import {inject} from "@angular/core";
import {CyeService} from "../../../cye.service";

export class PersonForm extends BaseFormClass<IPerson> {
  cyeService = inject(CyeService)

  constructor(data?: IPerson) {
    super(data)
  }

  getStateOnChanges$(): Observable<IPerson> {
    return this._form.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(250),
      startWith(this._form.value),
      tap((data: IPerson) => this.cyeService.setState([data, this.cyeService.getValue()[1]])
      )
    )
  }

  protected buildForm(data: IPerson): FormGroup {
    return this.formBuilder.group<IPersonForm>({
      firstName: new FormControl(data.firstName ?? '', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      lastName: new FormControl(
        data.lastName ?? '',
        {
          nonNullable: true,
          validators: [Validators.required]
        }),
      email: new FormControl(data.email ?? '',
        {
          nonNullable: true,
          validators: [Validators.required]
        }),
      age: new FormControl(data.age ?? 0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(18), Validators.max(99)]
      })
    })
  }

}
