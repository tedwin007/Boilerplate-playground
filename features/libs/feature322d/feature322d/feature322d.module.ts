import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature322dRoutingModule } from './feature322d-routing.module';
import { DataListComponent  } from './components/Data-list/Data-list.component';
import { UIDataComponent } from './components/single-Data-item/single-Data-item.component';
import { Feature322dService } from './feature322d.service';
import { Feature322dFeatureComponent} from "./feature322d-feature.component";

@NgModule({
  declarations: [
  UIDataComponent ,
  DataListComponent,
  Feature322dFeatureComponent
  ],
  imports: [
    CommonModule,
   Feature322dRoutingModule
  ],
  providers:[ Feature322dService ],
  exports:[ UIDataComponent]
})
export class Feature322dModule { }
