import { Component } from '@angular/core';

@Component({
  selector: 'tw-<%=dasherize(name)%>',
  template: `
   <router-outlet></router-outlet>
  `
})
export class <%=classify(name)%>Component  {

}
