import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { IRegisterUser } from '../interface/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;

  constructor(public afAuth: AngularFireAuth) {  }

  login(email: string, pass: string) {
    return this.afAuth.signInWithEmailAndPassword(email, pass);
  }

  register(dataUser: IRegisterUser) {
    return this.afAuth.createUserWithEmailAndPassword(dataUser.email, dataUser.password);
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
    this.afAuth.signOut();
  }

}
