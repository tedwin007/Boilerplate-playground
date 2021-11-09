import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeviceListComponent} from './components/device-list/device-list.component';

//I can also use "Resolver"
const routes: Routes = [
  {path: 'newMexicoData', component: DeviceListComponent},
  {path: 'europeData', component: DeviceListComponent},
  {path: 'indiaData', component: DeviceListComponent},
  {path: 'usaData', component: DeviceListComponent},
  {path: 'allData', component: DeviceListComponent},
  {path: '', redirectTo: '/allData', pathMatch: 'full'}, // redirect to `first-component`
  {path: '**', component: DeviceListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesGroupContentRoutingModule {
}
