import {FormControl, FormGroup, Validators} from "@angular/forms"
import {IPerson, IPersonForm} from "../../../../../models/interfaces/person.interface";
import {BaseFormClass} from "../../../../../models/classes/base-form.class";

export class PersonForm extends BaseFormClass<IPerson> {

  constructor(data?: IPerson) {
    super(data)
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
          validators: [Validators.required, Validators.email]
        }),
      age: new FormControl(data.age ?? 0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(18), Validators.max(99)]
      })
    })
  }

}
