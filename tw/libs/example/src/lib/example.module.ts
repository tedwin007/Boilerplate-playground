import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleGridViewComponent } from './components/example-grid-view/example-grid-view.component';
import { ExampleRoutingModule } from './example-routing.module';
import { YokoListComponent } from './components/yoko-list/yoko-list.component';
import { UIYokoComponent } from './components/single-yoko-item/single-yoko-item.component';
import { ExampleService } from './example.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExampleComponent } from './example.component';
import { ExampleFormComponent } from './components/example-form/example-form.component';
import { AgGridModule } from 'ag-grid-angular';
import {
  TestBed,
  TestBedStatic,
  TestModuleMetadata,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExampleStubService } from './test/stubs/example-stub.service';

@NgModule({
  declarations: [
    UIYokoComponent,
    YokoListComponent,
    ExampleComponent,
    ExampleFormComponent,
    ExampleGridViewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ExampleRoutingModule,
    AgGridModule.withComponents([]),
  ],
  providers: [ExampleService],
  exports: [UIYokoComponent, ExampleFormComponent, ExampleGridViewComponent],
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
   * ### forTest
   * Helpful util method that replaces services with Stub services,
   * modules with their TestingModule (Httpclient for example).
   * so when we will want to test different parts and component, we can simply do
   * ExampleModule.forTest({declarations:[CurrentTestedComponent]})
   *
   * note:
   * - this assumes we are using Karma & Jasmin
   * - this is not necessarily works, at the moment it is only demonstrates concept
   * - I did built a working version of this (it saves a lot of time and encourages "testing")
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
        providers: [ExampleStubService],
      },
    });
  }
}
