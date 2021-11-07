import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example2RoutingModule } from './example2-routing.module';
import { DtListComponent } from './components/dt-list/dt-list.component';
import { UIDtComponent } from './components/single-dt-item/single-dt-item.component';
import { Example2Service } from './example2.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Example2FeatureComponent } from './example2-feature.component';

@NgModule({
  declarations: [
    UIDtComponent,
    DtListComponent,
    Example2FeatureComponent,
    Example2FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    Example2RoutingModule,
  ],
  providers: [Example2Service],
  exports: [UIDtComponent],
})
export class Example2Module {}
