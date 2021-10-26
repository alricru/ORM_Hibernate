import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProfesoresPage } from './create-profesores.page';

const routes: Routes = [
  {
    path: '',
    component: CreateProfesoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProfesoresPageRoutingModule {}
