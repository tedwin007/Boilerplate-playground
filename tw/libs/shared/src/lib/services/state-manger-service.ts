import { BehaviorSubject, Observable } from "rxjs";

/**
 * Abstract Base Flux
 * Used to define Flux like data flow throughout the application's services
 *
 * @export
 * @abstract
 * @class AbstractBaseFlux
 * @template State
 */
export class StateManger<State> {

  protected _state$: BehaviorSubject<State>

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
