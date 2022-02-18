import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';

import { AuthModule } from './auth/auth.module';
import { RrhhModule } from './rrhh/rrhh.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    AuthModule,
    RrhhModule
  ]
})
export class ModulesModule { }
