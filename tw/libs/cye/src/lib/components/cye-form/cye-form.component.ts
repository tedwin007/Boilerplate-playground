import {Component, inject} from '@angular/core';
import {CyeService} from "../../cye.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WizardToken} from "../../models/interfaces/utils-type.type";

@Component({
  selector: 'cye-form',
  templateUrl: './cye-form.component.html',
  styleUrls: ['./cye-form.component.scss']
})
export class CyeFormComponent {
  private router = inject(Router);
  private activeRoute = inject(ActivatedRoute);
  private cyeService = inject(CyeService)
  private wizardService = inject(WizardToken);
  public form = this.wizardService.form

  get currentStep(): number {
    return this.wizardService.currentStep
  }

  get totalSteps(): number {
    return this.wizardService.steps.length
  }

  get isCurrentStepValid() {
    return this.wizardService.steps[this.currentStep].form.isValid()
  }

  next(): void {
    if (this.isCurrentStepValid) {
      this.wizardService.currentStep += 1;
      this.router.navigate([`step-${this.wizardService.currentStep}`], {relativeTo: this.activeRoute})
    }
  }

  back(): void {
    this.router.navigate([''], {relativeTo: this.activeRoute.root});
  }

  submit(): void {
    if (this.form.valid) {
      const rawValue = this.form.getRawValue();
      rawValue.employee.domain = this.wizardService?.steps[1].form.toDomainArray()
      console.log(rawValue);
      this.cyeService.postEmployee(rawValue).subscribe();
    }
  }
}
