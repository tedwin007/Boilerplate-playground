import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ExampleApiService} from "@tw/example";
import {SharedModule} from "@tw/shared";

@NgModule({
  providers: [ExampleApiService],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: 'example',
      loadChildren: () => import('@tw/example').then(m => m.moduleInstance)
    }
    ]),
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
}

