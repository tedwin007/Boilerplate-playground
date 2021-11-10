import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { <%= classify(name) %>FormComponent } from "./<%=name%>-form/<%=name%>-form.component";


@NgModule({
  declarations: [ <%= classify(name) %>FormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[<%= classify(name)%>FormComponent ]
})
export class <%= classify(name) %>EntityModule { }
