import {Component, inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SearchbarDirective} from "./directives/searchbar.directive";
import {SearchBarCachingItem, SearchBarService, SearchBarState} from "./searchbar.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'tw-searchbar',
  template: `
    <div class="searchbar-container" *ngIf="( state$| async) as state">
      <input type="text" (input)="search($event)" class="searchbar-input">
      <span>
            <i *ngIf="!state.isLoading" class="fa fa-search"></i>
            <div *ngIf="state.isLoading" class="loading primary">...</div>
        </span>
    </div>
  `,
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
  imports: [CommonModule, SearchbarDirective],
  providers: [SearchBarService],
  hostDirectives: [{
    directive: SearchbarDirective,
    outputs: ['onSearch:search'],
  }],
})
export class SearchbarComponent {
  private service: SearchBarService = inject(SearchBarService)
  state$: Observable<SearchBarState> = this.service.getState()

  constructor(private searchbarDirective: SearchbarDirective) {
  }

  search(value: Event): void {
    this.service.search((<any>value.target).value)
      .pipe(tap((res: SearchBarCachingItem) => this.searchbarDirective.onSearch.emit(res.val)))
      .subscribe()
  }
}
