import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProfesoresPageRoutingModule } from './list-profesores-routing.module';

import { ListProfesoresPage } from './list-profesores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProfesoresPageRoutingModule
  ],
  declarations: [ListProfesoresPage]
})
export class ListProfesoresPageModule {}
