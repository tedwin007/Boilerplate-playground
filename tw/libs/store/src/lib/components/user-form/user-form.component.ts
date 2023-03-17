import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { IUser} from "../../models/interfaces/user.interface";

@Component({
  selector: 'ui-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form: FormGroup = this.fb.group( {  autoJoin: [''],  moderator: [''],  anyFlagUp: [''],  index: [''],  userName: [''],  userGuid: [''],  versionGUID: [''],  mandatory: [''],  guid: [''],  dailyReminder: [''],  userRole: [''],  email: [''],  status: [''], });
  @Output() onSave = new EventEmitter<IUser>();
  @Input() canEdit = false;
  @Input() set data(content: IUser){
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

