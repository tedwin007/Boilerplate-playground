import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DtClass } from './class/dt-class';
import { IDt } from './class/dt-interface';

@Component({
  selector: 'ui-dt-form',
  templateUrl: './dt-form.component.html',
  styleUrls: ['./dt-form.component.scss'],
})
export class DtFormComponent implements OnInit {
  @Input() canEdit = false;
  @Input() set data(content: IDt) {
    if (content) {
      this.canEdit = true;
    }
    this.form.setValue(content);
  }
  @Output() onSave = new EventEmitter<DtClass>();

  form = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.max(100), Validators.min(2), Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit(): void {
    if (this.form.valid) {
      const item = new DtClass(this.form.value);
      this.onSave.emit(item);
    } else {
      //todo: toaster/throw error/logger etc...
    }
  }
}
