import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ConfirmModalComponent} from './components/confirm-modal/confirm-modal.component';
import {SharedModule} from "@tw/shared";

@NgModule({
  declarations: [
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [ConfirmModalComponent, SharedModule]
})
export class PredefinedModalsModule {
}
