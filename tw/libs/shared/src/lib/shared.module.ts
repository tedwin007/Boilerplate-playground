import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalStoreDbService} from "./services/local-store-db.service";
import {SearchbarComponent} from './components/searchbar/searchbar.component';
import {SplitPipe} from './pipes/split.pipe';

@NgModule({
  providers: [LocalStoreDbService],
  imports: [CommonModule],
  declarations: [
    SearchbarComponent,
    SplitPipe
  ],
  exports: [SearchbarComponent, SplitPipe]
})
export class SharedModule {
}
