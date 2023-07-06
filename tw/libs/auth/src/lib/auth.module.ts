import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@tw/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth.component';
import { UserAuthFormComponent } from './components/user-auth-form/user-auth-form.component';

@NgModule({
  declarations: [
    UserAuthFormComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AuthRoutingModule,
  ],
  providers: [AuthService],
  exports: [
    SharedModule,
    AuthComponent,
  ],
})
export class AuthModule {}
