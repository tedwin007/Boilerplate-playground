import { BehaviorSubject, Observable } from "rxjs";

export abstract class AbstractBaseFlux<State> {

  private _state$: BehaviorSubject<State>

  constructor(state: State) {
    this._state$ = new BehaviorSubject(state);
  }

  getState(): Observable<State> {
    return this._state$.asObservable();
  }

  setState(data: State): void {
    this._state$.next(data);
  }

  getValue(): State {
    return this._state$.getValue();
  }
}
