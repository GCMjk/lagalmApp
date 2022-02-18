import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@lgm-app-core/services/auth.service';
import { ILoginUser } from '@lgm-app-core/interface/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  minCharacters: number = 6;
  pattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              // private sweetAlert: string,
              private router: Router) { 
                this.loginForm = this.fb.group({
                  email: ['', [
                    Validators.required,
                    Validators.pattern(this.pattern)
                  ]],
                  password: ['', [
                    Validators.required,
                    Validators.minLength(this.minCharacters)
                  ]]
                });
  }

  // Abbreviation of loginForm.controls
  get fm() {
    return this.loginForm.controls;
  }

  async onLogin(loginForm: ILoginUser) {
    // await SweetAlert Loading
    const res = await this.authService.login(loginForm.email, loginForm.password)
      .catch( error => {
        // Close Loading

        // SweetAlert Error
        alert('Error: '+error.message);
      })
    if(res) {
      // Close Loading

      // SweetAlert Succes
      this.router.navigate(['/app/profile']);
      alert('Bienvenido '+res.user?.email)
    }
  }

}
