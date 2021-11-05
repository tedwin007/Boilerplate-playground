import { Injectable } from '@angular/core';
import { <%=classify(singleItemName)%>List } from './../models/types/<%=singleItemName%>-list.type';
import {<%=classify(name)%>Service} from "../<%= name %>.service";


@Injectable()
export class <%=classify(name)%>StubService extends <%=classify(name)%>Service  {

    constructor(state:<%=classify(singleItemName)%>List = []) {
      super(<<%=classify(singleItemName)%>List[]>state);
    }

}
