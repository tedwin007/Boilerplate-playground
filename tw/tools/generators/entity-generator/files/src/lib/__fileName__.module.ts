import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@tw/shared';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {<%= classify(name) %>GridViewComponent } from "./components/<%=dasherize(name)%>-grid-view/<%=dasherize(name)%>-grid-view.component";
import { <%=classify(name)%>RoutingModule } from './<%=dasherize(name)%>-routing.module';
import { <%=classify(singleItemName)%>ListComponent  } from './components/<%=dasherize(singleItemName)%>-list/<%=dasherize(singleItemName)%>-list.component';
import { Single<%=classify(singleItemName)%>Component } from './components/single-<%=dasherize(singleItemName)%>-item/single-<%=dasherize(singleItemName)%>-item.component';
import { <%=classify(name)%>Service } from './<%=dasherize(name)%>.service';
import {<%=classify(name)%>Component} from "./<%=dasherize(name)%>.component";
import {AgGridModule} from "ag-grid-angular";
import {TestBed, TestBedStatic, TestModuleMetadata} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {<%=classify(name)%>StubService} from "./test/stubs/<%=fileName%>-stub.service";
<%Object.keys(swaggerData['definitions']).forEach(function(item){%>import {<%=classify(item)%>FormComponent} from "./components/<%=dasherize(item)%>-form/<%=dasherize(item)%>-form.component";<%})%>

@NgModule({
  declarations: [
    <%Object.keys(swaggerData['definitions']).forEach(function(item){%><%=classify(item)%>FormComponent, <%})%>
    Single<%=classify(singleItemName)%>Component ,
    <%=classify(singleItemName)%>ListComponent,
    <%=classify(name)%>Component,
    <%= classify(name) %>GridViewComponent,
    <%=classify(name)%>Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    <%=classify(name)%>RoutingModule,
    AgGridModule.withComponents([])
  ],
  providers:[ <%=classify(name)%>Service ],
  exports:[
      SharedModule,
      Single<%=classify(singleItemName)%>Component,
      <%= classify(name) %>GridViewComponent,
      <%=classify(name)%>Component
  ]
})
export class <%=classify(name)%>Module {
  static forRoot(): ModuleWithProviders<<%=classify(name)%>Module> {
    return {
      ngModule: <%=classify(name)%>Module,
      providers: [<%=classify(name)%>Service]
    }
  }

  static forChild(): ModuleWithProviders<<%=classify(name)%>Module> {
    return {
      ngModule: <%=classify(name)%>Module,
      providers: []
    }
  }

  /**
   * <%=classify(name)%>Module.forTest()
   * Helpful util method that replaces services with Stub services,
   * modules with their TestingModule (Httpclient for example).
   * so when we will want to test different parts and component, we can simply do
   * <%=classify(name)%>Module.forTest({declarations:[CurrentTestedComponent]})
   *
   * note:
   * - this assumes we are using Karma & Jasmin
   * - this is not necessarily works, at the moment it is only demonstrates concept
   * - I did built a working version of this (it saves a lot of time and encourages "testing")
   */
  static forTest(moduleDef:TestModuleMetadata):TestBedStatic {
    return TestBed.configureTestingModule({
      ...moduleDef,
      imports:[<%=classify(name)%>Module.forRoot(),...(moduleDef.imports || [])],
    }).overrideModule(<%=classify(name)%>Module, {
      remove: {
        imports: [HttpClientModule],
        providers:[<%=classify(name)%>Service]
      },
      add: {
        imports: [HttpClientTestingModule],
        providers:[<%=classify(name)%>StubService]
      }
    })
  }
}