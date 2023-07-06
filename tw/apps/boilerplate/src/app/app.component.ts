import {Component} from '@angular/core';
@Component({
  selector: 'tw-root',
  template: `
      <header>
          <img src="https://dealhub.io/wp-content/uploads/2021/05/main-logo.svg">
      </header>

      <div class="sub-header">
          <div class="container">
              <h1 class="primary-color">Employee Form</h1>
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

