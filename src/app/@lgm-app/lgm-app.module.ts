import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgmAppRoutingModule } from './lgm-app-routing.module';

import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment';

import { LgmAppComponent } from './lgm-app.component';


@NgModule({
  declarations: [
    LgmAppComponent
  ],
  imports: [
    CommonModule,
    LgmAppRoutingModule,
    CoreModule,
    SharedModule,
    ModulesModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class LgmAppModule { }
