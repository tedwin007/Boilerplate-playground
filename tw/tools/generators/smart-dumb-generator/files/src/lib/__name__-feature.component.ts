import { Component } from '@angular/core';

@Component({
  selector: '<%=name%>-feature',
  template: `
   <router-outlet></router-outlet>
  `
})
export class <%=classify(name)%>FeatureComponent  {

}
