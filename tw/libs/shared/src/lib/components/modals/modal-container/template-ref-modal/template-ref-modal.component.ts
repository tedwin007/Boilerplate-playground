import {Component, Input} from '@angular/core';
import {TemplateRefModal} from "../../types/modal.interface";

@Component({
  selector: 'template-ref-modal',
  template: `<ng-container *ngTemplateOutlet="templateConfig.tempRef;context: templateConfig?.context"></ng-container>`,
})
export class TemplateRefModalComponent<T = any> {
  @Input() templateConfig = {} as TemplateRefModal
  data!: T | null;
}
