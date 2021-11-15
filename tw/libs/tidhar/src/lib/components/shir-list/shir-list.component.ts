import { Component, OnInit } from '@angular/core';
import { TidharService } from './../../tidhar.service';
import { ShirList } from '../../models/types/shir-list.type';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'shir-list',
  templateUrl: './shir-list.component.html',
  styleUrls: ['./shir-list.component.scss'],
})
export class ShirListComponent implements OnInit, OnDestroy {
  private _ngUnsubscirbe = new Subject();
  shirState$?: Observable<ShirList>;

  constructor(private tidharService: TidharService) {}

  ngOnInit() {
    this.shirState$ = this.tidharService
      .getState()
      .pipe(takeUntil(this._ngUnsubscirbe));
  }

  ngOnDestroy() {
    this._ngUnsubscirbe.next();
    this._ngUnsubscirbe.complete();
  }
}
