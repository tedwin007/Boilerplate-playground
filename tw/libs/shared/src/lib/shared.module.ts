import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalStoreDbService} from "./services/local-store-db.service";
import {SearchbarComponent} from './components/searchbar/searchbar.component';
import {SplitPipe} from './pipes/split.pipe';
import {AgGridModule} from "ag-grid-angular";
import {ButtonsModule} from "./directives/buttons/buttons.module";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";

@NgModule({
  providers: [LocalStoreDbService],
  imports: [
    CommonModule,
    ButtonsModule,
    AgGridModule.withComponents()
  ],
  declarations: [
    SearchbarComponent,
    SplitPipe,
    BreadcrumbComponent
  ],
  exports: [
    BreadcrumbComponent,
    SearchbarComponent,
    SplitPipe,
    ButtonsModule]
})
export class SharedModule {
}
