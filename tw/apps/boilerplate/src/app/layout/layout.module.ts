import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MainContentComponent} from './main-content/main-content.component';
import {RouterModule} from "@angular/router";
import { SectionComponent } from './section/section.component';
import {SharedModule} from "@tw/shared";


@NgModule({
  declarations: [
    SidebarComponent,
    MainContentComponent,
    SectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    SidebarComponent,
    MainContentComponent,
    SectionComponent
  ]
})
export class LayoutModule {
}
