import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAsignaturasPage } from './list-asignaturas.page';

const routes: Routes = [
  {
    path: '',
    component: ListAsignaturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAsignaturasPageRoutingModule {}
