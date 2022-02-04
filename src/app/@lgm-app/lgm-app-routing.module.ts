import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LgmAppComponent } from './lgm-app.component';

const routes: Routes = [
  {
    path: 'app',
    component: LgmAppComponent,
    children: [
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'login',
        loadChildren: () => import('@lgm-app-core/forms/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('@lgm-app-core/forms/register/register.module').then(m => m.RegisterModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LgmAppRoutingModule { }
