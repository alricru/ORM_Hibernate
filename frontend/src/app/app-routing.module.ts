import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'listProfesores',
    pathMatch: 'full'
  },
  {
    path: 'createProfesores',
    loadChildren: () => import('./create/create-profesores/create-profesores.module').then( m => m.CreateProfesoresPageModule)
  },
  {
    path: 'listProfesores',
    loadChildren: () => import('./list/list-profesores/list-profesores.module').then( m => m.ListProfesoresPageModule)
  },
  {
    path: 'updateProfesores/:idprofesores',
    loadChildren: () => import('./update/update-profesores/update-profesores.module').then( m => m.UpdateProfesoresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
