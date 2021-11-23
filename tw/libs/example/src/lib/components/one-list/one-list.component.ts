import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../example.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'one-list',
  templateUrl: './one-list.component.html',
  styleUrls: ['./one-list.component.scss'],
})
export class OneListComponent<T = any> implements OnInit {
  OneState$?: Observable<T>;

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.OneState$ = this.exampleService.getState();
  }
}
