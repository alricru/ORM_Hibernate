import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProfesoresPage } from './list-profesores.page';

const routes: Routes = [
  {
    path: '',
    component: ListProfesoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListProfesoresPageRoutingModule {}
