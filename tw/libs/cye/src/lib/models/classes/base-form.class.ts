import {FormBuilder, FormGroup} from "@angular/forms";
import {inject} from "@angular/core";
import {EntityFormGroup} from "../interfaces/utils-type.type";
import {Observable} from "rxjs";
import {IPerson} from "../interfaces/person.interface";
import {CyeService} from "../../cye.service";

export abstract class BaseFormClass<T> {

  abstract getStateOnChanges$(): Observable<T>

  protected _form: FormGroup;
  protected formBuilder: FormBuilder = inject(FormBuilder)

  protected abstract buildForm(data?: T): FormGroup;

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
