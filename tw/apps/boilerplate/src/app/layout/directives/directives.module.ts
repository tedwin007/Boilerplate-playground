import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderDirective } from './top-header.directive';
import { BottomHeaderDirective } from './bottom-header.directive';
import { SubHeaderDirective } from './sub-header.directive';



@NgModule({
  declarations: [
    TopHeaderDirective,
    BottomHeaderDirective,
    SubHeaderDirective
  ],
  exports: [
    TopHeaderDirective,
    SubHeaderDirective,
    BottomHeaderDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
