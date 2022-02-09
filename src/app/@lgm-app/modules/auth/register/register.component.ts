import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { FirestoreService } from '@lgm-app/core/services/firestore.service';
import { AuthService } from '@lgm-app-core/services/auth.service';
import { IRegisterUser } from '@lgm-app-core/interface/auth.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  minCharacters = 6;
  roles = ['admin', 'gerente', 'empleado'];
  areas = [
    {
      id: 1,
      name: 'Dirección'
    },
    {
      id: 2,
      name: 'IT'
    }
  ];

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    lastname: new FormControl('', [
      Validators.required
    ]),
    birthday: new FormControl('', [
      Validators.required
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(8),
      Validators.maxLength(10)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(this.minCharacters)
    ]),
    adress: new FormControl('', [
      Validators.required
    ]),
    curp: new FormControl('', [
      Validators.required
    ]),
    rfc: new FormControl(''),
    civilStatus: new FormControl('', [
      Validators.required
    ]),
    scholarship: new FormControl('', [
      Validators.required
    ]),
    accountNumber: new FormControl(''),
    employeeNumber: new FormControl(''),
    securityNumber: new FormControl(''),
    infonavit: new FormControl(false),
    emergencyNumber: new FormControl('', [
      Validators.required
    ]),
    rol: new FormControl(null, [
      Validators.required
    ]),
    area: new FormControl(null, [
      Validators.required
    ]),
    jobDescription: new FormControl('', [
      Validators.required
    ]),
    photo: new FormControl(null)
  });

  constructor( private authService: AuthService,
              private firestore: FirestoreService ) {  }

  // Abbreviation of loginForm.controls
  get controls(): { [key: string]: AbstractControl; } {
    return this.registerForm.controls;
  }
  
  async onRegister(userRegister: IRegisterUser) {
    const res = await this.authService.register(userRegister)
      .catch( error => {
        // Close loading

        // SweetAlert error
        console.log(userRegister.name);
        alert('Error: '+error);
      })
    if (res) {
      // Close Loading

      const path = 'usuarios';
      const id = res.user?.uid as string;
      userRegister.uid = id;
      userRegister.password = null!;
      await this.firestore.createDoc(userRegister, path, id)
      // SweetAlert Succes
      alert('Usuario creado '+res.user?.email);
    }
  }

}
