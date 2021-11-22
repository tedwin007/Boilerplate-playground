import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { I<%= entityName %>} from "../../models/interfaces/<%=dasherize(entityName)%>.interface";

@Component({
  selector: 'ui-<%=dasherize(entityName)%>-form',
  templateUrl: './<%=dasherize(entityName)%>-form.component.html',
  styleUrls: ['./<%=dasherize(entityName)%>-form.component.scss']
})
export class <%= classify(entityName) %>FormComponent implements OnInit {
  form: FormGroup = this.fb.group( { <% Object.keys(properties).forEach(function (propName) { %> <%=propName %>: [''], <% }) %>});
  @Output() onSave = new EventEmitter<I<%= entityName %>>();
  @Input() canEdit = false;
  @Input() set data(content: I<%= entityName %>){
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

