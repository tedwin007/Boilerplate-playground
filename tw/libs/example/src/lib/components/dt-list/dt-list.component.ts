import { Component, OnInit } from '@angular/core';
import { ExampleService } from './../../example.service';
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

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.dtState$ = this.exampleService
      .getState()
      .pipe(takeUntil(this._ngUnsubscirbe));
  }

  ngOnDestroy() {
    this._ngUnsubscirbe.next();
    this._ngUnsubscirbe.complete();
  }
}
