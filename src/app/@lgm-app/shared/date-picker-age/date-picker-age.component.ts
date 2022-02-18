import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker-age',
  templateUrl: './date-picker-age.component.html',
  styleUrls: ['./date-picker-age.component.scss']
})
export class DatePickerAgeComponent {

  @Input() parent!: FormGroup;

  CURRENTDAY = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  };
  minDate: NgbDateStruct = {
    year: this.CURRENTDAY.year - 100,
    month: this.CURRENTDAY.month,
    day: this.CURRENTDAY.day
  };
  maxDate: NgbDateStruct = {
    year: this.CURRENTDAY.year - 16,
    month: this.CURRENTDAY.month,
    day: this.CURRENTDAY.day
  };

  model: NgbDateStruct = this.maxDate;

  @Output() newDate = new EventEmitter<NgbDateStruct>();
  selectDateChange() {
    this.newDate.emit(this.model);
  }

}
