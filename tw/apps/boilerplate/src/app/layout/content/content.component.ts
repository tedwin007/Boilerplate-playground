import {Component, OnInit} from '@angular/core';
import {DevicesGroupContentService} from "../../../../../../libs/devices-group-content/src/lib/devices-group-content.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'tw-main-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  isTableViewActive$: Observable<boolean> = of(true)

  constructor(private devicesGroupContentService: DevicesGroupContentService) {
  }

  ngOnInit(): void {
    this.isTableViewActive$ = this.devicesGroupContentService.getIsTableViewState()
  }

  switchToCardView() {
    this.devicesGroupContentService.switchViewMode(true);
  }

  switchToTableView() {
    this.devicesGroupContentService.switchViewMode(false);
  }
}
