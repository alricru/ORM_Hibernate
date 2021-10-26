import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAlumnosPage } from './create-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAlumnosPageRoutingModule {}
