import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateProfesoresPage } from './update-profesores.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateProfesoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateProfesoresPageRoutingModule {}
