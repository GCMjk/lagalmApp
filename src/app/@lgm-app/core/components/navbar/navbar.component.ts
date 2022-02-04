import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@lgm-app/core/services/auth.service';
import { FirestoreService } from '@lgm-app/core/services/firestore.service';
import { IUser } from '@lgm-app/core/interface/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  logged:boolean = false;
  uid = null! as string;
  userInfo: IUser = {
    uid: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
    photo: '',
    rol: 'user',
    area: ''
  };
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
    this.firestore.getDoc<IUser>(path, id).subscribe( res => {
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
