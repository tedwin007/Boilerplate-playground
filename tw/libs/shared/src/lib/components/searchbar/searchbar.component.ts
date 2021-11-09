import {Component, Input} from '@angular/core';

@Component({
  selector: 'tw-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  @Input() placeHolder: string = 'Search';
}
