import {Component, OnInit} from '@angular/core';
import {DevicesGroupContentService} from "../../../../../../libs/devices-group-content/src/lib/devices-group-content.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'tw-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  isTableViewActive$: Observable<boolean> = of(true)

  constructor(private devicesGroupContentService: DevicesGroupContentService) {
  }

  ngOnInit(): void {
    this.isTableViewActive$ = this.devicesGroupContentService.getIsTableViewActive()
  }

  switchToCardView() {
    this.devicesGroupContentService.switchViewMode(true);
  }

  switchToTableView() {
    this.devicesGroupContentService.switchViewMode(false);
  }
}
