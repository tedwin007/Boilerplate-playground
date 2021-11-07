import { Component, OnInit } from '@angular/core';
import {<%=classify(name)%>Service} from './../../<%=name%>.service';
import { <%=classify(singleItemName)%>List} from "../../models/types/<%=singleItemName%>-list.type";
import {Observable, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: '<%=singleItemName%>-list',
  templateUrl: './<%=singleItemName%>-list.component.html',
  styleUrls: ['./<%=singleItemName%>-list.component.scss']
})
export class <%=classify(singleItemName)%>ListComponent implements OnInit,OnDestroy {
  private _ngUnsubscirbe = new Subject();
  <%=singleItemName%>State$?:Observable<<%=classify(singleItemName)%>List>;

  constructor(private <%=name.toLowerCase()%>Service:<%=classify(name)%>Service ) { }

  ngOnInit() {
    this.<%=singleItemName%>State$ = this.<%=name.toLowerCase()%>Service.getState().pipe(takeUntil(this._ngUnsubscirbe));
  }

  ngOnDestroy(){
    this._ngUnsubscirbe.next();
    this._ngUnsubscirbe.complete()
  }
}
