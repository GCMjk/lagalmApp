import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { LgmAppRoutingModule } from './lgm-app-routing.module';
import { LgmAppComponent } from './lgm-app.component';
import { NavbarComponent } from '@lgm-app-core/components/navbar/navbar.component';
import { HeaderComponent } from '@lgm-app-core/components/header/header.component';

import { environment } from '../../environments/environment';


@NgModule({
  declarations: [
    LgmAppComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LgmAppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class LgmAppModule { }
