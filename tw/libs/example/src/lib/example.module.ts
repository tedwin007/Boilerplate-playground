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

  /**
   * ExampleModule.forTest()
   * Helpful util method that replaces services with Stub services,
   * modules with their TestingModule (Httpclient for example).
   * so when we will want to test different parts and component, we can simply do
   * ExampleModule.forTest({declarations:[CurrentTestedComponent]})
   *
   * note:
   * - this assumes we are using Karma & Jasmin
   * - this is not necessarily works, at the moment it is only demonstrates concept
   * - I did build a working version of this (it saves a lot of time and encourages "testing")
   */
  static forTest(moduleDef: TestModuleMetadata): TestBedStatic {
    return TestBed.configureTestingModule({
      ...moduleDef,
      imports: [ExampleModule.forRoot(), ...(moduleDef.imports || [])],
    }).overrideModule(ExampleModule, {
      remove: {
        imports: [HttpClientModule],
        providers: [ExampleService],
      },
      add: {
        imports: [HttpClientTestingModule],
        providers: [],
      },
    });
  }
}
