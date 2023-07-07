import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Employee} from "./classes/employee.class";
import {CyeService} from "../../cye.service";
import {BaseEmployee} from "../../models/interfaces/employee.interface";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ui-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  private _employee: Employee
  private _ngDestroy = new Subject<void>();
  private router: Router = inject(Router)
  private activeRoute: ActivatedRoute = inject(ActivatedRoute)
  form: FormGroup

  constructor(private cyeFormService: CyeService) {
    const employeeData: BaseEmployee = this.cyeFormService.getValue()[1];
    this._employee = new Employee(employeeData);
    this.form = this._employee.form.asFormGroup();
  }

  ngOnInit(): void {
    this._employee.form.getStateOnChanges$()
      .pipe(takeUntil(this._ngDestroy))
      .subscribe()
  }

  ngOnDestroy(): void {
    this._ngDestroy.next();
    this._ngDestroy.complete();
  }

  submit(): void {
    if (this.form.valid) {
      this.cyeFormService.postEmployee(this.form.value).subscribe();
    }
  }

  back(): void {
    this.router.navigate([''], {relativeTo: this.activeRoute.root});
  }
}

