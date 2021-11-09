import {Component} from '@angular/core';

@Component({
  selector: 'tw-header',
  template: `
    <div class="gradient-bg">
      <div class="col-12 d-flex justify-content-center align-items-center h-30">
        <ng-content select="[twTopHeader]"></ng-content>
      </div>

      <div class="col-12 d-flex gap-2 align-items-center h-30 pl-0">
        <ng-content select="[twBottomHeader]"></ng-content>
      </div>

      <div class="col-12 d-flex h-40 sub-header align-items-center justify-content-end ">
        <ng-content select="[twSubHeader]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
