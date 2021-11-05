import { Component, OnInit } from '@angular/core';
import {Feature322dService} from './../../feature322d.service';
import {DataList} from "../../models/types/Data-list.type";
import {Observable} from "rxjs";

@Component({
  selector: 'Data-list',
  templateUrl: './Data-list.component.html',
  styleUrls: ['./Data-list.component.scss']
})
export class DataListComponent implements OnInit {

  DataState$?:Observable<DataList>;

  constructor(private feature322dService:Feature322dService ) { }

  ngOnInit() {
    this.DataState$ = this.feature322dService.getState();
  }

}
