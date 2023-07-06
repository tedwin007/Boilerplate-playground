import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[primary-btn]'
})
export class PrimaryBtnDirective {
  @HostBinding('class') get classes(): string {
    return 'btn primary-btn';
  }
}

