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
import {TableViewComponent} from './components/table-view/table-view.component';
import {AgGridModule} from "ag-grid-angular";
import {AgSeverityComponent} from './components/table-view/ag-grid-components/ag-severity.component';
import {DevicesSharedModule} from "./shared/devices-shared.module";
import {AgTagsComponent} from './components/table-view/ag-grid-components/ag-tags.component';

@NgModule({
  declarations: [
    UIDeviceComponent,
    DeviceListComponent,
    TableViewComponent,
    AgSeverityComponent,
    AgTagsComponent,
    DevicesGroupContentFeatureComponent,
    DeviceGroupNavigationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    DevicesSharedModule,
    DevicesGroupContentRoutingModule,
    AgGridModule.withComponents([AgSeverityComponent, AgTagsComponent]),
  ],
  providers: [DevicesGroupContentService],
  exports: [UIDeviceComponent, DeviceGroupNavigationComponent, SharedModule],
})
export class DevicesGroupContentModule {
}
