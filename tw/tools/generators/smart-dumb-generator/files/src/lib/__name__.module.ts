import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%=classify(name)%>RoutingModule } from './<%=name%>-routing.module';
import { <%=classify(singleItemName)%>ListComponent  } from './components/<%=singleItemName%>-list/<%=singleItemName%>-list.component';
import { UI<%=classify(singleItemName)%>Component } from './components/single-<%=singleItemName%>-item/single-<%=singleItemName%>-item.component';
import { <%=classify(name)%>Service } from './<%=name%>.service';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {<%=classify(name)%>Component} from "./<%=name%>.component";
import {<%= classify(name) %>EntityModule} from "./<%= classify(name) %>-entity.module";


@NgModule({
  declarations: [
    UI<%=classify(singleItemName)%>Component ,
    <%=classify(singleItemName)%>ListComponent,
    <%=classify(name)%>Component,
  ],
  imports: [
    <%= classify(name) %>EntityModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    <%=classify(name)%>RoutingModule
  ],
  providers:[ <%=classify(name)%>Service ],
  exports:[ UI<%=classify(singleItemName)%>Component]
})
export class <%=classify(name)%>Module { }
