import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "@tw/auth";

@Component({
  selector: 'tw-auth',
  template: `
    <h2>Please Login</h2>
    <br>
    <ui-user-auth-form></ui-user-auth-form>
  `,
  styles:[`
      :host {
          width: 100%;
          position: relative;
          text-align: center;
      }`]
})
export class AuthComponent implements OnInit {
  authService: AuthService = inject(AuthService);


  ngOnInit() {

    this.authService.getState().subscribe(() => {
    })
  }
}
