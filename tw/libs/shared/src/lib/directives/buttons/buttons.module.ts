import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimaryBtnDirective} from "./primary-btn.directive";
import {RegularBtnDirective} from "./regular-btn.directive";


@NgModule({
  declarations: [
    PrimaryBtnDirective,
    RegularBtnDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryBtnDirective,
    RegularBtnDirective
  ]
})
export class ButtonsModule {
}
