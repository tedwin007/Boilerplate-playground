import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CyeRoutingModule} from './cye-routing.module';
import {CyeService} from './cye.service';
import {CyeComponent} from './cye.component';

@NgModule({
  declarations: [
    CyeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CyeRoutingModule,
  ],
  providers: [CyeService],
  exports: [
    CyeComponent,
  ],
})
export class CyeModule {
}
