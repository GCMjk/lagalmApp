import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirestoreService } from '@lgm-app/core/services/firestore.service';
import { AuthService } from '@lgm-app/core/services/auth.service';
import { IRegisterUser } from '@lgm-app/core/interface/auth.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  logged:boolean = false;
  uid = null! as string;
  userInfo: IRegisterUser = null!
  /* userInfo: IRegisterUser = {
    uid: '',
    name: '',
    lastname: '',
    birthday: '',
    phone: 0,
    email: '',
    password: '',
    domicilio: '',
    curp: '',
    rfc: '',
    civilStatus: '',
    scholarship: '',
    accountNumber: 0,
    employeeNumber: 0,
    securityNumber: 0,
    infonavit: false,    
    emergencyNumber: 0,
    photo: '',
    rol: 'operator',
    area: '',
    jobDescription: ''
  }; */
  constructor( private authService: AuthService,
              private firestore: FirestoreService,
              // private sweetAlert: string,
              private route: Router ) {  }

  async ngOnInit() {
    this.authService.stateUser().subscribe( res => {
      if(res) {
        this.logged = true;
        this.getUid();
      } else {
        this.logged = false;
      }
    });
  }

  async getUid() {
    const uid = await this.authService.getUid();
    if(uid) {
      this.uid = uid
      this.getUserInfo();
    } else {
      console.log('No hay UID');
    }
  }

  getUserInfo() {
    const path = 'Usuarios';
    const id = this.uid;
    this.firestore.getDoc<IRegisterUser>(path, id).subscribe( res => {
      if(res) {
        this.userInfo = res;
      }
    });
  }

  
  logout() {
    this.logged = false;
    this.authService.logout();
    localStorage.removeItem('user');
    // SweetAlert
    alert('Sesión finalizada');
    this.route.navigate(['/app']);
  }
  
}
