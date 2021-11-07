import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleRoutingModule } from './example-routing.module';
import { DtListComponent } from './components/dt-list/dt-list.component';
import { UIDtComponent } from './components/single-dt-item/single-dt-item.component';
import { ExampleService } from './example.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExampleFeatureComponent } from './example-feature.component';

@NgModule({
  declarations: [
    UIDtComponent,
    DtListComponent,
    ExampleFeatureComponent,
    ExampleFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ExampleRoutingModule,
  ],
  providers: [ExampleService],
  exports: [UIDtComponent],
})
export class ExampleModule {}
