import { Component, OnInit } from '@angular/core';
import {<%=classify(name)%>Service} from '../../<%=dasherize(name)%>.service';
import {Observable} from "rxjs";

@Component({
  selector: '<%=dasherize(singleItemName)%>-list',
  templateUrl: './<%=dasherize(singleItemName)%>-list.component.html',
  styleUrls: ['./<%=dasherize(singleItemName)%>-list.component.scss']
})
export class <%=classify(singleItemName)%>ListComponent<T=any> implements OnInit {
  <%=classify(singleItemName)%>State$?:Observable<T>;

  constructor(private <%=classify(name).toLowerCase()%>Service:<%=classify(name)%>Service) { }

  ngOnInit() {
    this.<%=classify(singleItemName)%>State$ = this.<%=classify(name).toLowerCase()%>Service.getState();
  }
}
