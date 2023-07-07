import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalStoreDbService} from "./services/local-store-db.service";
import {SearchbarComponent} from './components/searchbar/searchbar.component';
import {SplitPipe} from './pipes/split.pipe';
import {ButtonsModule} from "./directives/buttons/buttons.module";

@NgModule({
  providers: [LocalStoreDbService],
  imports: [
    CommonModule,
    ButtonsModule,
  ],
  declarations: [
    SearchbarComponent,
    SplitPipe,
  ],
  exports: [
    SearchbarComponent,
    SplitPipe,
    ButtonsModule
  ]
})
export class SharedModule {
}
