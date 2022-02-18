import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { FirestoreService } from './services/firestore.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [
    FirestoreService,
    AuthService
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
