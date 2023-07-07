import {Component, inject, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {WizardState, WizardToken} from "../../../../models/interfaces/utils-type.type";

@Component({
  selector: 'ui-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  private wizard: WizardState = inject(WizardToken);

  @Input() form!: FormGroup;

  ngOnInit(): void {
    this.form = this.wizard.form.get('employee') as FormGroup
  }
}

