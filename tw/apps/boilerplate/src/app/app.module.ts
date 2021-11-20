import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        //todo: add "path" and "m.<ModuleName>"
        RouterModule.forRoot([{
            path: '',
            loadChildren: () => import('@tw/').then(m =>)
        }]),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
