import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LgmAppComponent } from './lgm-app.component';

const routes: Routes = [
  {
    path: 'app',
    component: LgmAppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LgmAppRoutingModule { }
