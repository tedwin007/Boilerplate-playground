import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalStoreDbService} from "./services/local-store-db.service";

@NgModule({
  providers: [LocalStoreDbService],
  imports: [CommonModule],
})
export class SharedModule {
}
