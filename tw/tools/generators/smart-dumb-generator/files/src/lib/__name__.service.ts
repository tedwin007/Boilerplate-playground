import { Injectable } from '@angular/core';
import { <%=classify(singleItemName)%>List } from './models/types/<%=singleItemName%>-list.type';
import {AbstractBaseFlux} from "@tw/shared";

@Injectable()
export class <%=classify(name)%>Service extends AbstractBaseFlux<<%=classify(singleItemName)%>List[]>  {

  constructor(state:<%=classify(singleItemName)%>List = []) {
    super(<<%=classify(singleItemName)%>List[]>state);
  }

}
