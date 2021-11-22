import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ISingle} from "../../models/interfaces/single.interface";

@Component({
  selector: 'ui-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.scss']
})
export class SingleFormComponent implements OnInit {
  form: FormGroup = this.fb.group( {  id: [''], });
  @Output() onSave = new EventEmitter<ISingle>();
  @Input() canEdit = false;
  @Input() set data(content: ISingle){
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

