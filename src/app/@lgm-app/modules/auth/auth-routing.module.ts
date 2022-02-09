import { map } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, canActivate } from '@angular/fire/compat/auth-guard';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

const uidAdmin = 'z8iyUiWNGAdSyHpG49yBp1cxv5g2';
const onlyAdmin = () => map( (user:any) => !!user && (user.uid === uidAdmin) );

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'reset',
    component: ResetPassComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    ...canActivate(onlyAdmin)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
