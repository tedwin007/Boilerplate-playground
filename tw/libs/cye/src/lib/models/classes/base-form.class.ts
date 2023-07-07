import {FormBuilder, FormGroup} from "@angular/forms";
import {inject} from "@angular/core";

export abstract class BaseFormClass<T> {

  protected _form: FormGroup;
  protected formBuilder: FormBuilder = inject(FormBuilder)

  protected abstract buildForm(data?: T): FormGroup;

  isValid(): boolean {
    return !!this._form?.valid
  }

  get value(): T {
    return this._form.getRawValue();
  }

  protected constructor(data?: T) {
    this._form = this.buildForm(data)
  }

  asFormGroup(): FormGroup {
    return this._form;
  }

}
