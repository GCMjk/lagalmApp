import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FirestoreService } from '@lgm-app/core/services/firestore.service';
import { AuthService } from '@lgm-app-core/services/auth.service';
import { IRegisterUser } from '@lgm-app-core/interface/auth.interface';

// DatePicker
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  maxText = 30;
  maxPass = 18;
  pttnOnlyNumbers = /^[0-9]\d*$/;
  pttnEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  pttnPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  pttnCurp = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
  pttnRfc = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
  states = ['Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Coahuila de Zaragoza','Colima','Ciudad de México','Durango','Guanajuato','Guerrero','Hidalgo','Jalisco','Estado de México','Michoacan de Ocampo','Morelos','Nayarit','Nuevo Leon','Oaxaca','Puebla','Queretaro de Arteaga','Quintana Roo','San Luis Potosi','Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz de Ignacio de la Llave','Yucatan','Zacatecas'];
  pttnZip = '[0-9]{5}';
  pttnNSS = /^(\d{2})(\d{2})(\d{2})\d{5}$/;
  civilStatus = ['Soltero', 'Casado', 'Divorciado', 'Viudo', 'Unión libre'];
  scholarships = ['Primaria', 'Secundaria', 'Preparatoria / Bachillerato', 'Lic. / Ing.', 'Pasante'];
  roles = ['admin', 'gerente', 'empleado'];
  areas = ['Dirección','IT'];

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private firestore: FirestoreService) {
                this.registerForm = this.fb.group({
                  id: ['', [
                    Validators.required,
                    Validators.pattern(this.pttnOnlyNumbers)
                  ]],
                  email: ['', [
                    Validators.required,
                    Validators.pattern(this.pttnEmail)
                  ]],
                  password: ['', [
                    Validators.required,
                    Validators.maxLength(this.maxPass),
                    Validators.pattern(this.pttnPass)
                  ]],
                  name: this.fb.group({
                    first: ['', [
                      Validators.required,
                      Validators.maxLength(this.maxText)
                    ]],
                    last: ['', [
                      Validators.required,
                      Validators.maxLength(this.maxText)
                    ]]
                  }),
                  birthday: ['', [
                    Validators.required
                  ]],
                  curp: ['', [
                    Validators.required,
                    Validators.pattern(this.pttnCurp)
                  ]],
                  rfc: ['', [
                    Validators.required,
                    Validators.pattern(this.pttnRfc)
                  ]],
                  civilStatus: ['',
                    Validators.required
                  ],
                  scholarship: ['',
                    Validators.required
                  ],
                  phone: ['', [
                    Validators.required,
                    Validators.minLength(10),
                    Validators.maxLength(10),
                    Validators.pattern(this.pttnOnlyNumbers)
                  ]],
                  emergencyPhone: ['', [
                    Validators.required,
                    Validators.minLength(10),
                    Validators.maxLength(10),
                    Validators.pattern(this.pttnOnlyNumbers)
                  ]],
                  address: this.fb.group({
                    street: ['', [
                      Validators.required,
                      Validators.maxLength(this.maxText)
                    ]],
                    number: ['', [
                      Validators.required,
                      Validators.maxLength(4),
                      Validators.pattern(this.pttnOnlyNumbers)
                    ]],
                    exNumber: ['', [
                      Validators.maxLength(4)
                    ]],
                    city: ['', [
                      Validators.required,
                      Validators.maxLength(this.maxText)
                    ]],
                    state: ['',
                      Validators.required
                    ],
                    zip: ['', [
                      Validators.required,
                      Validators.pattern(this.pttnZip)
                    ]]
                  }),
                  cardNumber: ['', [
                    Validators.required,
                    Validators.maxLength(16),
                    Validators.pattern(this.pttnOnlyNumbers)
                  ]],
                  securityNumber: ['', [
                    Validators.required,
                    Validators.pattern(this.pttnNSS)
                  ]],
                  infonavit: ['',
                    Validators.required
                  ],
                  job: this.fb.group({
                    rol: ['',
                      Validators.required
                    ],
                    area: ['',
                      Validators.required
                    ],
                    description: ['', [
                      Validators.required,
                      Validators.maxLength(this.maxText)
                    ]]
                  }),
                  photo: ['']
                });
                console.log(this.registerForm)
  }

  // Abbreviation of loginForm.controls
  get fm() {
    return this.registerForm.controls;
  }

  // Abbreviation of loginForm.controls
  get fmN() {
    return (this.registerForm.controls['name'] as FormGroup).controls;
  }

  // Abbreviation of loginForm.controls
  get fmA() {
    return (this.registerForm.controls['address'] as FormGroup).controls;
  }

  // Abbreviation of loginForm.controls
  get fmJ() {
    return (this.registerForm.controls['job'] as FormGroup).controls;
  }

  selectDate($event: NgbDateStruct) {
    const selectDate = $event;
    this.registerForm.value.birthday = selectDate;
    return this.registerForm.value.birthday;
  }

  async onRegister(registerForm: IRegisterUser) {
    const res = await this.authService.register(registerForm)
      .catch( error => {
        // Close loading

        // SweetAlert error
        console.log(registerForm.name);
        alert('Error: '+error);
      })
    if(res) {
      // Close Loading

      const path = 'users';
      const id = res.user?.uid as string;
      registerForm.uid = id;
      registerForm.password = null!;
      await this.firestore.createDoc(registerForm, path, id)
      // SweetAlert Succes
      alert('Usuario creado '+res.user?.email);
      console.log(res)
    }
  }

}
