import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { IRegisterUser } from '../interface/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;

  constructor( public afAuth: AngularFireAuth,
              public route: Router, 
              // private sweetAlert: string
              ) {  }

  login(email: string, pass: string) {
    return this.afAuth.signInWithEmailAndPassword(email, pass);
  }

  register(dataUser: IRegisterUser) {
    return this.afAuth.createUserWithEmailAndPassword(dataUser.email, dataUser.password);
  }

  sendEmailVerification() {
    return ;
  }

  stateUser() {
    return this.afAuth.authState;
  }

  async getUid() {
    const user = await this.afAuth.currentUser;
    if(user) {
      return user?.uid!;
    } else {
      return null;
    }
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.route.navigate(['/app']);
      // SweetAlert
      alert('Sesión finalizada');
    });
  }

}
