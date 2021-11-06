import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../forecast.service';
import { Observable } from 'rxjs';
import {DayDataItem} from "../../models/class/day-data.class";

@Component({
  selector: 'day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.scss'],
})
export class DayListComponent implements OnInit {
  dayState$?: Observable<DayDataItem[]>;

  constructor(private forcastService: ForecastService) {}

  ngOnInit() {
    this.dayState$ = this.forcastService.getState();
  }
}
