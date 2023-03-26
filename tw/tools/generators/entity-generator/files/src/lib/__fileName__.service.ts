import { Injectable } from '@angular/core';
import { StateManger } from '@tw/shared';
import {<%=classify(name)%>ApiService} from "./services/<%=dasherize(name)%>-api.service";

@Injectable({providedIn:'root'})
export class <%=classify(name)%>Service extends StateManger<any>  {

  constructor(private <%=classify(name).toLowerCase()%>Service:<%=classify(name)%>ApiService) {
    super([]);
  }

}
