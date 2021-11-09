import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "@tw/shared";
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from "./content/content.component";
import {LayoutDirectivesModule} from "./directives/layout-directives.module";

@NgModule({
  declarations: [
    SidebarComponent,
    ContentComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    LayoutDirectivesModule,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    LayoutDirectivesModule
  ]
})
export class LayoutModule {
}
