import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../example.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'yoko-list',
  templateUrl: './yoko-list.component.html',
  styleUrls: ['./yoko-list.component.scss'],
})
export class YokoListComponent<T = any> implements OnInit {
  YokoState$?: Observable<T>;

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.YokoState$ = this.exampleService.getState();
  }
}
