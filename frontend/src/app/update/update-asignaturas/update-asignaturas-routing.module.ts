import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAsignaturasPage } from './update-asignaturas.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAsignaturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAsignaturasPageRoutingModule {}
