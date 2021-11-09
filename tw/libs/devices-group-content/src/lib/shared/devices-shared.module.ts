import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './components/tag/tag.component';
import {SharedModule} from "@tw/shared";
import {SeverityPipe} from "./pipes/severity.pipe";



@NgModule({
  declarations: [
    TagComponent,
    SeverityPipe
  ],
  exports: [
    TagComponent,
    SeverityPipe
  ],
  providers:[SeverityPipe],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DevicesSharedModule { }
