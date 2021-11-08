import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {LayoutModule} from "./layout/layout.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {DevicesGroupContentModule} from "../../../../libs/devices-group-content/src/lib/devices-group-content.module";

const routes = [{
  path: '',
  loadChildren: () => import('@tw/devices-group-content').then(m => m.devicesGroupContent())
}];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DevicesGroupContentModule,
    HttpClientModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}
