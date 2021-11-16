import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  AfterViewInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  IProduct,
  IPriceEstimate,
  IProfile,
  IActivity,
  IActivities,
  IError,
} from '../../models/interfaces/store.interface';

export type EntityType =
  | IProduct
  | IPriceEstimate
  | IProfile
  | IActivity
  | IActivities
  | IError;

export type FormType<T = EntityType> = { [k in keyof T]: [any] };

@Component({
  selector: 'ui-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.scss'],
})
export class StoreFormComponent implements OnInit, AfterViewInit {
  @Output() onSave = new EventEmitter<EntityType>();
  @Input() canEdit = false;
  @Input() set data(content: FormType) {
    if (!!content) {
      this.canEdit = true;
      this._form.setValue(content);
    }
  }

  get form(): FormGroup {
    return this._form;
  }

  private _form: FormGroup;

  ProductFormGroupDef: FormType<IProduct> = {
    product_id: [''],
    description: [''],
    display_name: [''],
    capacity: [''],
    image: [''],
  };
  PriceEstimateFormGroupDef: FormType<IPriceEstimate> = {
    product_id: [''],
    currency_code: [''],
    display_name: [''],
    estimate: [''],
    low_estimate: [''],
    high_estimate: [''],
    surge_multiplier: [''],
  };
  ProfileFormGroupDef: FormType<IProfile> = {
    first_name: [''],
    last_name: [''],
    email: [''],
    picture: [''],
    role: [''],
  };
  ActivityFormGroupDef: FormType<IActivity> = { uuid: [''] };
  ActivitiesFormGroupDef: FormType<IActivities> = {
    offset: [''],
    limit: [''],
    count: [''],
    history: [''],
  };
  ErrorFormGroupDef: FormType<IError> = {
    code: [''],
    message: [''],
    fields: [''],
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit(): void {
    if (this._form.valid) {
      this.onSave.emit(this._form.value);
    } else {
      throw 'error on submit';
      //todo: toaster/throw error/logger etc...
    }
  }

  ngAfterViewInit(): void {
    throw 'StoreFormComponent -> ngAfterViewInit : should set "form" with this.setGroup(formGroup,formValue)';
  }

  setFormGroup(formGroup: FormType, formValue?: EntityType): void {
    this._form = this.fb.group(formGroup);
    if (formValue) {
      this._form.setValue(formValue);
    }
  }

  transfomer() {}
}
