import {Directive, EventEmitter,Output} from '@angular/core';

@Directive({
  selector: '.searchbar-input',
  standalone: true,
})
export class SearchbarDirective {
  @Output() onSearch = new EventEmitter<string[]>();
}
