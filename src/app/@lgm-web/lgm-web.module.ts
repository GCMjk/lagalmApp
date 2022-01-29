import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgmWebRoutingModule } from './lgm-web-routing.module';
import { LgmWebComponent } from './lgm-web.component';
import { NavbarComponent } from '@lgm-web-core/components/navbar/navbar.component';
import { FooterComponent } from '@lgm-web-core/components/footer/footer.component';


@NgModule({
  declarations: [
    LgmWebComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LgmWebRoutingModule
  ]
})
export class LgmWebModule { }
