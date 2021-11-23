import { Injectable } from '@angular/core';
import { StateManger } from "@tw/shared";
import {<%=classify(name)%>Service} from  './../<%=dasherize(name)%>.service';
import {<%=classify(name)%>ApiService} from "./../services/<%=dasherize(name)%>-api.service";

@Injectable()
export class <%=classify(name)%>StubService  extends StateManger implements <%=classify(name)%>Service {

    constructor(private <%=classify(name).toLowerCase()%>Service:<%=classify(name)%>ApiService) {
        super([]);
    }
}
