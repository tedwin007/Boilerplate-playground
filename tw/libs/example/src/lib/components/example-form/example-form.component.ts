import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  AfterViewInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ISingle } from '../../models/interfaces/example.interface';

export type EntityType = ISingle;

export type FormType<T = EntityType> = { [k in keyof T]: [any] };

@Component({
  selector: 'ui-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss'],
})
export class ExampleFormComponent implements OnInit, AfterViewInit {
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

  SingleFormGroupDef: FormType<ISingle> = { id: [''] };

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
    throw 'ExampleFormComponent -> ngAfterViewInit : should set "form" with this.setGroup(formGroup,formValue)';
  }

  setFormGroup(formGroup: FormType, formValue?: EntityType): void {
    this._form = this.fb.group(formGroup);
    if (formValue) {
      this._form.setValue(formValue);
    }
  }

  transfomer() {}
}
