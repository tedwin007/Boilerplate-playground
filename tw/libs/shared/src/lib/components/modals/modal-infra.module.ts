import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalContainerComponent} from './modal-container/modal-container.component';
import {TemplateRefModalComponent} from './modal-container/template-ref-modal/template-ref-modal.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    ModalContainerComponent,
    TemplateRefModalComponent,
  ],
  exports: [
    ModalContainerComponent,
    TemplateRefModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,

  ]
})
export class ModalInfraModule {
}
