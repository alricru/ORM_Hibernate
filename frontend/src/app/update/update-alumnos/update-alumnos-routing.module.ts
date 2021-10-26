import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAlumnosPage } from './update-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAlumnosPageRoutingModule {}
