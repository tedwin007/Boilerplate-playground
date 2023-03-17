import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { IApiResponse} from "../../models/interfaces/api-response.interface";

@Component({
  selector: 'ui-api-response-form',
  templateUrl: './api-response-form.component.html',
  styleUrls: ['./api-response-form.component.scss']
})
export class ApiResponseFormComponent implements OnInit {
  form: FormGroup = this.fb.group( {  code: [''],  type: [''],  message: [''], });
  @Output() onSave = new EventEmitter<IApiResponse>();
  @Input() canEdit = false;
  @Input() set data(content: IApiResponse){
    if (!!content) {
      this.canEdit = true;
      this.form.setValue(content);
    }
  }

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  submit(): void {
    if(this.form.valid) {
      this.onSave.emit(this.form.value);
    } else {
      throw 'error on submit';
    //todo: toaster/throw error/logger etc...
    }
  }
}

