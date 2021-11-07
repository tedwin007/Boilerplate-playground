import { Component, OnInit } from '@angular/core';
import { Example2Service } from './../../example2.service';
import { DtList } from '../../models/types/dt-list.type';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dt-list',
  templateUrl: './dt-list.component.html',
  styleUrls: ['./dt-list.component.scss'],
})
export class DtListComponent implements OnInit, OnDestroy {
  private _ngUnsubscirbe = new Subject();
  dtState$?: Observable<DtList>;

  constructor(private example2Service: Example2Service) {}

  ngOnInit() {
    this.dtState$ = this.example2Service
      .getState()
      .pipe(takeUntil(this._ngUnsubscirbe));
  }

  ngOnDestroy() {
    this._ngUnsubscirbe.next();
    this._ngUnsubscirbe.complete();
  }
}
