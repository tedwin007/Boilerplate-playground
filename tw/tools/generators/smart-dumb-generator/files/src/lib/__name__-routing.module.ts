import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'single-<%=singleItemName%>', component: UI<%=classify(singleItemName)%>Component},
  {path: 'multi-<%=singleItemName%>', component: <%=classify(singleItemName)%>ListComponent},
  {path: '**', component:  <%=classify(singleItemName)%>ListComponent},  // Wildcard route for a 404 page
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule { }
