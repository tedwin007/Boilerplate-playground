import {Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IPerson} from "../../models/interfaces/person.interface";
import {ButtonsModule} from "@tw/shared";
import {CommonModule} from "@angular/common";
import {CyeService} from "../../cye.service";
import {Person} from "./classes/person.class";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'ui-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
  standalone: true,
  imports: [ButtonsModule, CommonModule, ReactiveFormsModule, FormsModule]
})
export class PersonFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  router = inject(Router);
  private _ngDestroy = new Subject<void>();
  private activeRoute = inject(ActivatedRoute)
  private _person: Person;

  constructor() {
    const personData: IPerson = inject(CyeService).getValue()[0];
    this._person = new Person(personData);
    this.form = this._person.form.asFormGroup()
  }

  next(): void {
    if (this.form.valid) {
      this.router.navigate(['step-2'], {relativeTo: this.activeRoute})
    }
  }

  ngOnInit(): void {
    this._person.form.getStateOnChanges$()
      .pipe(takeUntil(this._ngDestroy))
      .subscribe()
  }

  ngOnDestroy(): void {
    this._ngDestroy.next();
    this._ngDestroy.complete();
  }
}

