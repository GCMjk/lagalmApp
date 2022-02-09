import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '@lgm-app/core/services/firestore.service';
import { AuthService } from '@lgm-app-core/services/auth.service';
import { IRegisterUser } from '@lgm-app-core/interface/auth.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  uid = null! as string;
  userInfo: IRegisterUser = null!;
  constructor( private authService: AuthService,
              private firestore: FirestoreService ) { }

  async ngOnInit() {
    this.authService.stateUser().subscribe( res => {
      if(res) {
        this.getUid();
      }
    });
  }

  async getUid() {
    const uid = await this.authService.getUid();
    if(uid) {
      this.uid = uid;
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

}
