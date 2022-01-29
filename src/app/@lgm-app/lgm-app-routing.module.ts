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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LgmAppRoutingModule { }
