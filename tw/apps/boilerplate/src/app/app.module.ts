import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {CanEditDirective, SearchbarComponent, WidgetComponent} from "@tw/shared";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PredefinedModalsModule} from "./predefine-modals/predefined-modals.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [AppComponent, CanEditDirective],
  imports: [
    BrowserModule,
    CommonModule,
    WidgetComponent,
    BrowserAnimationsModule,
    PredefinedModalsModule,
    HttpClientModule,
    SearchbarComponent,
    MatDialogModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
  exports: [PredefinedModalsModule]
})

export class AppModule {
}
