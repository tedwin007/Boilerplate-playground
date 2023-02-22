import { Component } from '@angular/core';

@Component({
  selector: 'tw-root',
  template: `
      <div class="container h-100">
          <header class="bg-success row">
              <h1>App Component
                  <span><button primary-btn>Btn</button></span>
              </h1>
          </header>

          <div class="row content bg-success">Content
              <router-outlet></router-outlet>
          </div>

          <footer class="row bg-success">
              @TidharWienreb
          </footer>
      </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
