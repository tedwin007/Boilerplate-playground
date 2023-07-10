import {Component} from '@angular/core';
@Component({
  selector: 'tw-root',
  template: `
      <header>
          <img class="logo" src="https://main-app-production-public.s3.amazonaws.com/0so8896gr3ytvigaths5ewke16qw">
      </header>

      <div class="sub-header">
          <div class="container">
              <h1 class="primary-color">Page Title</h1>
          </div>
      </div>

      <div class="content container">
          <router-outlet></router-outlet>
      </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


}

