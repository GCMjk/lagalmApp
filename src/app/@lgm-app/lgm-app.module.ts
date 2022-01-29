import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgmAppRoutingModule } from './lgm-app-routing.module';
import { LgmAppComponent } from './lgm-app.component';
import { NavbarComponent } from '@lgm-app-core/components/navbar/navbar.component';
import { HeaderComponent } from '@lgm-app-core/components/header/header.component';
import { GreetingsComponent } from '@lgm-app-core/components/greetings/greetings.component';


@NgModule({
  declarations: [
    LgmAppComponent,
    NavbarComponent,
    HeaderComponent,
    GreetingsComponent
  ],
  imports: [
    CommonModule,
    LgmAppRoutingModule
  ]
})
export class LgmAppModule { }
