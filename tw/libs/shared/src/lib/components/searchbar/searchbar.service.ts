import {inject, Injectable, InjectionToken} from '@angular/core';
import {StateManger} from "../../services/state-manger-service";
import {IndexedDBService} from "../../services/indexed-db.service";
import {HttpClient} from "@angular/common/http";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {
  catchError,
  delay,
  distinctUntilChanged,
  finalize,
  Observable,
  of,
  switchMap,
  tap,
  throwError
} from "rxjs";

export interface SearchBarState {
  isLoading: boolean,
  currentValue: string[]
}

export interface SearchBarCachingItem {
  key: string,
  val: string[]
}

export const SearchBarAPI = new InjectionToken<string>('SearchBarAPI',)

@Injectable()
export class SearchBarService extends StateManger<SearchBarState> {
  public apiPath = ''
  private _httpClient = inject(HttpClient);
  private _cache: IndexedDBService<string[]> = IndexedDBService.getInstance({
    dbName: 'nx',
    storeName: 'searchbar'
  });

  constructor() {
    super({isLoading: false, currentValue: ['']});
  }

  search(str: string): Observable<SearchBarCachingItem> {
    return fromPromise(this._cache.get(str)).pipe(
      tap(() => this.setState({...this.getValue(), isLoading: true})),
      // todo: remove delay operator
      delay(1000),
      switchMap((res?: string[]) => res ? this.fromCache({key: str, val: res}) : this.request(str)),
      tap((res) => this.setState({isLoading: false, currentValue: res.val})),
      finalize(() => {
        this.setState({...this.getValue(), isLoading: false})
      })
    );
  }

  private fromCache(res: SearchBarCachingItem): Observable<SearchBarCachingItem> {
    return of(res).pipe(
      catchError((err) => {
        this.setState({...this.getValue(), isLoading: false})
        return throwError(() => err);
      })
    )
  }

  private request(str: string): Observable<SearchBarCachingItem> {
    return this._httpClient.get<SearchBarCachingItem>(this.apiPath).pipe(
      // catchError((err) => throwError(() => err))
      // todo: use the first catchError
      catchError((err) => of({key: str, val: ["mock1", "mock2", str]})),
      distinctUntilChanged((previous, current) => previous.val !== current.val),
      tap((res: SearchBarCachingItem) => this._cache.add(str, res.val))
    );
  }
}
