import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "@tw/auth";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize, tap} from "rxjs";

@Component({
  selector: 'tw-auth',
  template: `
    <h2>Please Login</h2>
    <br>
    <ui-user-auth-form></ui-user-auth-form>
  `,
})
export class AuthComponent implements OnInit {
  authService: AuthService = inject(AuthService);


  ngOnInit() {

    this.authService.getState().subscribe(() => {
    })
  }
}
