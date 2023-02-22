import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ExampleApiService} from "../../../../libs/example/src/lib/services/example-api.service";

@NgModule({
  providers: [ExampleApiService],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      loadChildren: () => import('@tw/example').then(m => m.Example())
    }]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
