import {inject, Injectable} from '@angular/core';
import {StateManger} from '@tw/shared';
import {AuthApiService} from './services/auth-api.service';
import {IUserAuth} from "./models/interfaces/user-auth.interface";
import {map, Observable, tap, throwError} from "rxjs";
import {IApiResponse} from "./models/interfaces/api-response.interface";
import {catchError} from "rxjs/operators";
import {ActivatedRouteSnapshot, createUrlTreeFromSnapshot} from "@angular/router";

export type AuthState = { isAuthenticate: boolean };

@Injectable({providedIn: 'root'})
export class AuthService extends StateManger<AuthState> {

  static authGuard = (next: ActivatedRouteSnapshot) => {
    return (inject(AuthService) as AuthService).getState()
      .pipe(
        map(({isAuthenticate}: AuthState) =>
          isAuthenticate ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
        )
      );
  };

  constructor(private authService: AuthApiService) {
    super({isAuthenticate: false});
  }

  login(cert: IUserAuth): Observable<IApiResponse> {
    return this.authService.auth(cert).pipe(
      catchError((err) => throwError(() => err)),
      tap(() => this.setState({isAuthenticate: true})),
    )
  }
}
