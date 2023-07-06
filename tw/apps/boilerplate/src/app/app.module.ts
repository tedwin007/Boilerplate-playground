import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {SharedModule, SearchbarComponent} from "@tw/shared";
import {AuthService} from "@tw/auth";

@NgModule({
  providers: [],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: SearchbarComponent},
      {path: 'bla', component: SearchbarComponent, canActivate: [AuthService.authGuard]},
      {
        path: 'login', loadChildren: () => import('@tw/auth').then(m => m.AuthModule)
      },
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
}

