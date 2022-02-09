import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RrhhRoutingModule } from './rrhh-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AreasComponent } from './areas/areas.component'

@NgModule({
  declarations: [
    AreasComponent
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule,
    ReactiveFormsModule
  ]
})
export class RrhhModule { }
