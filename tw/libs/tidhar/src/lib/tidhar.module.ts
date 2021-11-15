import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TidharRoutingModule } from './tidhar-routing.module';
import { ShirListComponent } from './components/shir-list/shir-list.component';
import { UIShirComponent } from './components/single-shir-item/single-shir-item.component';
import { TidharService } from './tidhar.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TidharComponent } from './tidhar.component';

@NgModule({
  declarations: [UIShirComponent, ShirListComponent, TidharComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    TidharRoutingModule,
  ],
  providers: [TidharService],
  exports: [UIShirComponent],
})
export class TidharModule {}
