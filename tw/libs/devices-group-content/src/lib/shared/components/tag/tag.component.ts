import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'tw-tags',
  template: `
    <div class="device-card-tags">
      <span *ngFor="let item of (tags | split:',')"> {{item}}</span>
    </div>
  `,
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent  {
  @Input() tags: string = '';
}
