import {Component, inject, Input, OnInit} from "@angular/core";
import {WizardState, WizardToken} from "../../../../models/interfaces/utils-type.type";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'ui-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
  private wizard: WizardState = inject(WizardToken);
  @Input() form!: FormGroup;

  ngOnInit(): void {
    this.form = this.wizard.form.get('person') as FormGroup
  }
}

