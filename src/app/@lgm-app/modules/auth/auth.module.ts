import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@lgm-app/shared/shared.module';
import { IConfig, NgxMaskModule } from "ngx-mask"

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

export const NGX_MASK_OPTIONS: Partial<IConfig> = {
  thousandSeparator: ",",
};

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    ResetPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forRoot(NGX_MASK_OPTIONS),
  ]
})
export class AuthModule { }
