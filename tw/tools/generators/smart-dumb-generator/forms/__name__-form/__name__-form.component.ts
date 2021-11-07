import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {<%=classify(name)%>Class} from "./class/<%=name%>-class";
import {I<%=classify(name)%>} from "./class/<%=name%>-interface";

<% function renderSingleValidator(validatorName,value) {%><%if(!!value){%>Validators.<%- validatorName %>(<%- value %>),<%}else{%>Validators.<%- validatorName %>,<%}%><%}%>
<% function renderValidators(validators,json,currentProps) { %><% validators.forEach(function(validatorName){ %><% var value = json[currentProps]['form']['validators'][validatorName] %> <%- renderSingleValidator(validatorName,value)%> <%  }) _%> <% } %>
<% function renderFormProps(keys,json) {%><%keys.forEach( function(prop){%><%- prop %>:['', <%- renderValidators(Object.keys(json[prop]['form']['validators']),json, prop) %>], <%})%> <%}%>
  @Component({
  selector: 'ui-<%=name%>-form',
  templateUrl: './<%=name%>-form.component.html',
  styleUrls: ['./<%=name%>-form.component.scss']
})

export class <%= classify(name) %>FormComponent implements OnInit {
  @Input() canEdit = false;
  @Input() set data(content:I<%=classify(name)%>){
    if (content){
      this.canEdit = true;
    }
    this.form.setValue(content);
  }

  @Output() onSave = new EventEmitter<<%=classify(name)%>Class>();
  form = this.fb.group({
     <%- renderFormProps(Object.keys(json),json)  %>
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submit():void {
    if(this.form.valid) {
      const item = new <%=classify(name)%>Class(this.form.value);
      this.onSave.emit(item);
    } else {
      //todo: toaster/throw error/logger etc...
    }
  }
}

