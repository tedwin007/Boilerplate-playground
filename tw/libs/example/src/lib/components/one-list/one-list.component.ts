import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../example.service';
import { Observable } from 'rxjs';
import {IOne} from "../../models/interfaces/one-item.interface";

@Component({
  selector: 'one-list',
  templateUrl: './one-list.component.html',
  styleUrls: ['./one-list.component.scss'],
})
export class OneListComponent implements OnInit {
  OneState$!: Observable<IOne[]>;

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.OneState$ = this.exampleService.getState();
  }
}
