import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from "@tw/shared";
import {RouterModule} from "@angular/router";

const routes = [{
  path: 'forecast',
  loadChildren: () => import('@tw/forcast').then(m => m.ForcastModule)
}];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {
}
