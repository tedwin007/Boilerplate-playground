import {BehaviorSubject, Observable} from "rxjs";

/**
 * Abstract Base Flux
 * Used to define Flux like data flow throughout the application's services
 *
 * @export
 * @abstract
 * @class AbstractBaseFlux
 * @template State
 */
export class StateManger<State = any> {

  protected _state$: BehaviorSubject<State>

  constructor(state: State) {
    this._state$ = new BehaviorSubject(state);
  }

  getState(): Observable<State> {
    return this._state$.asObservable();
  }

  setState(data: Partial<State> | State): void {
    if (typeof data == 'object') {
      this._state$.next({...this.getValue(), ...data})
    } else {
      this._state$.next(data)
    }

  }

  getValue(): State {
    return this._state$.getValue();
  }
}
