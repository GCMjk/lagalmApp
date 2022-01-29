import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LgmAppModule } from '@lgm-app/lgm-app.module';
import { LgmWebModule } from '@lgm-web/lgm-web.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LgmAppModule,
    LgmWebModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
