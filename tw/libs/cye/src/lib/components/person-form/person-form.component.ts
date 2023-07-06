import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { IPerson} from "../../models/interfaces/person.interface";

@Component({
  selector: 'ui-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  form: FormGroup = this.fb.group( {  firstName: [''],  lastName: [''],  email: [''],  age: [''], });
  @Output() onSave = new EventEmitter<IPerson>();
  @Input() canEdit = false;
  @Input() set data(content: IPerson){
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

