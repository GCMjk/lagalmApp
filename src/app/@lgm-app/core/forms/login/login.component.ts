import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@lgm-app-core/services/auth.service';
import { IUser } from '@lgm-app-core/interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent {

  minCharacters = 6;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(this.minCharacters)
    ])
  });

  constructor(private authService: AuthService,
              // private sweetAlert: string,
              private router: Router) { }

  // Abbreviation of loginForm.controls
  get controls(): { [key: string]: AbstractControl; } {
    return this.loginForm.controls;
  }

  async onLogin(loginForm: IUser) {
    // await SweetAlert Loading
    const res = await this.authService.login(loginForm.email, loginForm.password)
      .catch( error => {
        // Close Loading

        // SweetAlert Error
        alert('Error: '+error);
      })
    if(res) {
      // Close Loading

      // SweetAlert Succes
      this.router.navigate(['/app/employee']);
      alert('Bienvenido '+res.user?.email)
    }
  }

}
