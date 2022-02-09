import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PermissionsComponent } from './permissions/permissions.component';
import { AreasComponent } from './areas/areas.component';

const routes: Routes = [
  {
    path: 'permisos',
    component: PermissionsComponent
  },
  {
    path: 'areas',
    component: AreasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RrhhRoutingModule { }
