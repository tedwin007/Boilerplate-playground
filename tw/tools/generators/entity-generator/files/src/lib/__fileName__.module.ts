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
}
