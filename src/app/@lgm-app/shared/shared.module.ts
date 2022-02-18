import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { DatePickerAgeComponent } from './date-picker-age/date-picker-age.component';


@NgModule({
  declarations: [
    DatePickerAgeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  exports: [DatePickerAgeComponent]
})
export class SharedModule { }
