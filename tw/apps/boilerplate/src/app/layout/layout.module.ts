import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "@tw/shared";
import {HeaderComponent} from './header/header.component';
import {DirectivesModule} from "./directives/directives.module";


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    // DirectivesModule should be in the project's "shared module"
    DirectivesModule,
  ],
  exports: [
    SidebarComponent,
    DirectivesModule
  ]
})
export class LayoutModule {
}
