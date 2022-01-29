import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LgmWebComponent } from './lgm-web.component';

const routes: Routes = [
  {
    path: '',
    component: LgmWebComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LgmWebRoutingModule { }
