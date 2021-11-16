import { Component, OnInit } from '@angular/core';
import {<%=classify(name)%>Service} from '../../<%=name%>.service';
import { <%=classify(singleItemName)%>List} from "../../../models/types/<%=singleItemName%>-list.type";
import {Observable} from "rxjs";

@Component({
  selector: '<%=singleItemName%>-list',
  templateUrl: './<%=singleItemName%>-list.component.html',
  styleUrls: ['./<%=singleItemName%>-list.component.scss']
})
export class <%=classify(singleItemName)%>ListComponent<T=any> implements OnInit {
  <%=singleItemName%>State$?:Observable<T>;

  constructor(private <%=name.toLowerCase()%>Service:<%=classify(name)%>Service) { }

  ngOnInit() {
    this.<%=singleItemName%>State$ = this.<%=name.toLowerCase()%>Service.getState();
  }
}
