import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForcastRoutingModule} from './forcast-routing.module';
import {DayListComponent} from './components/day-list/day-list.component';
import {UIDayComponent} from './components/single-day-item/single-day-item.component';
import {ForecastService} from './forecast.service';
import {ForcastFeatureComponent} from './forcast-feature.component';
import {ForecastAPIService} from "./forecast-api.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [UIDayComponent, DayListComponent, ForcastFeatureComponent],
  imports: [CommonModule, ForcastRoutingModule, HttpClientModule],
  providers: [ForecastService, ForecastAPIService],
  exports: [UIDayComponent, ForcastRoutingModule],
})
export class ForcastModule {
}
