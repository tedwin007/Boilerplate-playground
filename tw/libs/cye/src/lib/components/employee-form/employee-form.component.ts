import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { IEmployee} from "../../models/interfaces/employee.interface";

@Component({
  selector: 'ui-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup = this.fb.group( {  personalInfo: [''],  companyName: [''],  domain: [''],  numOfEmployees: [''], });
  @Output() onSave = new EventEmitter<IEmployee>();
  @Input() canEdit = false;
  @Input() set data(content: IEmployee){
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

