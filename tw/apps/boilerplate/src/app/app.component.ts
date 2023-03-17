import { Component } from '@angular/core';

@Component({
  selector: 'tw-root',
  template: `
      <header>
          <img src="https://dealhub.io/wp-content/uploads/2021/05/main-logo.svg">
          <tw-breadcrumb></tw-breadcrumb>
      </header>

      <div class="sub-header">
          <div class="container">
              <button class="btn-primary">Create Opportunity</button>
              <span class="disabled">My proposal</span>
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
