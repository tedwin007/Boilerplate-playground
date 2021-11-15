import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AgGridModule} from "ag-grid-angular";
import {<%= classify(name) %>FormComponent } from "./<%=name%>-form/<%=name%>-form.component";
import {<%= classify(name) %>GridViewComponent } from "./<%=name%>-grid-view/<%=name%>-grid-view.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [ <%= classify(name) %>FormComponent,<%= classify(name) %>GridViewComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  exports:[<%= classify(name)%>FormComponent,<%= classify(name) %>GridViewComponent ]
})
export class <%= classify(name) %>EntityModule { }
