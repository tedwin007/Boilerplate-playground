import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevicesGroupContentRoutingModule} from './devices-group-content-routing.module';
import {DeviceListComponent} from './components/device-list/device-list.component';
import {UIDeviceComponent} from './components/single-device-item/single-device-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DevicesGroupContentFeatureComponent} from './devices-group-content-feature.component';
import {DevicesGroupContentService} from "./devices-group-content.service";
import {DeviceGroupNavigationComponent} from './components/device-group-navigation/device-group-navigation.component';
import {SharedModule} from "@tw/shared";

@NgModule({
  declarations: [
    UIDeviceComponent,
    DeviceListComponent,
    DevicesGroupContentFeatureComponent,
    DeviceGroupNavigationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    DevicesGroupContentRoutingModule,
  ],
  providers: [DevicesGroupContentService],
  exports: [UIDeviceComponent, DeviceGroupNavigationComponent,SharedModule],
})
export class DevicesGroupContentModule {
}
