import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {<%=classify(singleItemName)%>ListComponent} from "./components/<%=dasherize(singleItemName)%>-list/<%=dasherize(singleItemName)%>-list.component";
import {Single<%=classify(singleItemName)%>Component} from  "./components/single-<%=dasherize(singleItemName)%>-item/single-<%=dasherize(singleItemName)%>-item.component";
import {<%=classify(name)%>GridViewComponent} from "./components/<%=dasherize(name)%>-grid-view/<%=dasherize(name)%>-grid-view.component";

const routes: Routes = [
  {path: '', component:<%=classify(name)%>GridViewComponent},
  {path:'list',component: <%=classify(singleItemName)%>ListComponent},
  {path: '<%=dasherize(singleItemName)%>/:id', component: Single<%=classify(singleItemName)%>Component}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule { }
