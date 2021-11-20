import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {<%=classify(singleItemName)%>ListComponent} from "./components/<%=dasherize(singleItemName)%>-list/<%=dasherize(singleItemName)%>-list.component";
import {UI<%=classify(singleItemName)%>Component} from  "./components/single-<%=dasherize(singleItemName)%>-item/single-<%=dasherize(singleItemName)%>-item.component";

const routes: Routes = [
  {path: 'single-<%=dasherize(singleItemName)%>/:id', component: UI<%=classify(singleItemName)%>Component},
  {path: '<%=dasherize(singleItemName)%>-list', component: <%=classify(singleItemName)%>ListComponent},
  //todo: add 404 page
  {path: '**', component:  <%=classify(singleItemName)%>ListComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule { }
