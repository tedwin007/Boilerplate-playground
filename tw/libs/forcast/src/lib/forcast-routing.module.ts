import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UIDayComponent} from "./components/single-day-item/single-day-item.component";
import {DayListComponent} from "./components/day-list/day-list.component";
import {ForcastFeatureComponent} from "./forcast-feature.component";


const routes: Routes = [
  {
    path: '',
    component: ForcastFeatureComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'multi-days',
        component: DayListComponent, // another child route component that the router renders
      },
      {
        path: 'single-day', // child route path
        component: UIDayComponent, // child route component that the router renders
      },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForcastRoutingModule {
}
