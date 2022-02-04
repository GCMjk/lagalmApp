import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './areas.component';


@NgModule({
  declarations: [
    AreasComponent
  ],
  imports: [
    CommonModule,
    AreasRoutingModule,
    ReactiveFormsModule
  ]
})
export class AreasModule { }
