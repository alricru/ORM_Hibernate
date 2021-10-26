import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAsignaturasPage } from './create-asignaturas.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAsignaturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAsignaturasPageRoutingModule {}
