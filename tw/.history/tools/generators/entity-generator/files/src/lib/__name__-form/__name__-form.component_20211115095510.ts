import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
<%var obj = swaggerData['definitions']; %>
  <%var keys = Object.keys(obj); %>
import {<% keys.forEach(function (entity, index) { %> I <%=entity %> <%if (index < keys.length - 1) {%>, <%}%> <% }) %>} from "../models/interfaces/<%=name%>.interface";
import { from } from "rxjs";

export type EntityType = <% keys.forEach(function (entity, index) { %> I <%=entity %> <%if (index < keys.length - 1) {%>| <%}%> <% }) %>;

type FromType = { [k in keyof EntityType]: [any] }

@Component({
  selector: 'ui-<%=name%>-form',
  templateUrl: './<%=name%>-form.component.html',
  styleUrls: ['./<%=name%>-form.component.scss']
})
export class <%= classify(name) %> FormComponent implements OnInit, AfterViewInit {
  @Input() canEdit = false;
  @Input() set data(content: FormType){
    if (!!content) {
      this.canEdit = true;
      this._form.setValue(content);
    }
  }

  get form():FormGroup{
    return this._form
  }

  @Output() onSave = new EventEmitter<any>();
  private _form: FormGroup;
  <% keys.forEach(function (entity) { %>
    <%=entity %> FormGroupDef = { <% Object.keys(obj[entity]['properties']).forEach(function (propName) { %> <%=propName %>: [''], <% }) %>} <% }) %>

    constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if(this._form.valid) {
    this.onSave.emit(this._form.value);
  } else {
    throw 'error on submit';
    //todo: toaster/throw error/logger etc...
  }
}
ngAfterViewInit(): void {
  throw '<%= classify(name) %>FormComponent -> ngAfterViewInit : should set "form" with this.setGroup(formGroup,formValue)';
}

setFormGroup(formGroup: FormType, formValue ?: EntityType) : void {
  this._form = this.fb.group(formGroup);
  if(formValue) {
    this._form.setValue(formValue);
  }
}

transfomer(){

}
}

