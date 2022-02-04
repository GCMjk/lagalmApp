import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms'

import { FirestoreService } from '@lgm-app/core/services/firestore.service';
import { IArea } from '@lgm-app/core/interface/area.interface';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent {

  areasForm = new FormGroup({
    area: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('')
  });
  newArea: IArea = {
    area: '',
    description: ''
  }
  constructor( private firestore: FirestoreService ) { }

  // Abbreviation of loginForm.controls
  get controls(): { [key: string]: AbstractControl; } {
    return this.areasForm.controls;
  }

  async saveArea(areaForm: IArea) {
    const path = 'Areas';
    const id = this.firestore.getId();
    await this.firestore.createDoc(areaForm, path, id);
    alert('Area '+areaForm.area+' creada con exito!')
  }

}
