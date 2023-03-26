import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@tw/shared";

@NgModule({
  providers: [],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: 'users',
      loadChildren: () => import('@tw/users').then(m => m.UsersModule)
    },
      // {
      //   path: 'store',
      //   loadChildren: () => import('@tw/petstore').then(m => m.PetstoreModule)
      // }
    ]),
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
}

