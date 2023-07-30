import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplitPipe} from './pipes/split.pipe';
import {ButtonsModule} from "./directives/buttons/buttons.module";
import {ModalInfraModule} from "./components/modals/modal-infra.module";

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    ModalInfraModule
  ],
  declarations: [
    SplitPipe,

  ],
  exports: [
    SplitPipe,
    ButtonsModule,
    ModalInfraModule
  ]
})
export class SharedModule {
}
