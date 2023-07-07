import {Component} from '@angular/core';
@Component({
  selector: 'tw-root',
  template: `
      <header>
          <img src="https://cyesec.com/wp-content/themes/cye/images/logo-dark.svg">
      </header>

      <div class="sub-header">
          <div class="container">
              <h1 class="primary-color">Wizard Form</h1>
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

