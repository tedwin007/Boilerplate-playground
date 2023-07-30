import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IUserAuth} from "../../models/interfaces/user-auth.interface";
import {AuthService} from "../../auth.service";

type IUserAuthForm = { [k in keyof IUserAuth]: FormControl<string> }

@Component({
  selector: 'ui-user-auth-form',
  templateUrl: './user-auth-form.component.html',
  styleUrls: ['./user-auth-form.component.scss']
})
export class UserAuthFormComponent {
  authService = inject(AuthService)
  @Output() onSave = new EventEmitter<IUserAuth>();

  @Input() set data(content: IUserAuth) {
    if (content) {
      this.form.setValue(content);
    }
  }

  form: FormGroup = inject(FormBuilder).group<IUserAuthForm>({
    username: new FormControl('', {nonNullable: true,validators: [Validators.required]}),
    password: new FormControl('', {nonNullable: true,validators: [Validators.required]})
  });

  submit(): void {
    if (this.form.valid) {
      this.onSave.emit(this.form.value);
      this.authService.login(this.form.value).subscribe();
    } else {
      throw 'error on submit';
      //todo: toaster/throw error/logger etc...
    }
  }
}

