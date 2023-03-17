import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[regular-btn]'
})
export class RegularBtnDirective {
  @HostBinding('class') get classes(): string {
    return 'btn secondary-btn';
  }

}
