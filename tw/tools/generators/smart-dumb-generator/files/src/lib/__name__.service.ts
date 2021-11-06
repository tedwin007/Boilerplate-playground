import { Injectable } from '@angular/core';
import { <%=classify(singleItemName)%>List } from './models/types/<%=singleItemName%>-list.type';
import {StateManger} from "../../../shared/src/lib/services/state-manger-service";

@Injectable()
export class <%=classify(name)%>Service extends StateManger<<%=classify(singleItemName)%>List[]>  {

  constructor(state:<%=classify(singleItemName)%>List = []) {
    super(<<%=classify(singleItemName)%>List[]>state);
  }

}
