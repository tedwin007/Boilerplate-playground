import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@tw/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExampleGridViewComponent } from './components/example-grid-view/example-grid-view.component';
import { ExampleRoutingModule } from './example-routing.module';
import { OneListComponent } from './components/one-list/one-list.component';
import { SingleOneComponent } from './components/single-one-item/single-one-item.component';
import { ExampleService } from './example.service';
import { ExampleComponent } from './example.component';
import { AgGridModule } from 'ag-grid-angular';
import {
  TestBed,
  TestBedStatic,
  TestModuleMetadata,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SingleFormComponent } from './components/single-form/single-form.component';

@NgModule({
  declarations: [
    SingleFormComponent,
    SingleOneComponent,
    OneListComponent,
    ExampleComponent,
    ExampleGridViewComponent,
    ExampleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ExampleRoutingModule,
    AgGridModule.withComponents([]),
  ],
  providers: [ExampleService],
  exports: [
    SingleOneComponent,
    ExampleGridViewComponent,
    ExampleComponent,
  ],
})
export class ExampleModule {
  static forRoot(): ModuleWithProviders<ExampleModule> {
    return {
      ngModule: ExampleModule,
      providers: [ExampleService],
    };
  }

  static forChild(): ModuleWithProviders<ExampleModule> {
    return {
      ngModule: ExampleModule,
      providers: [],
    };
  }
}
