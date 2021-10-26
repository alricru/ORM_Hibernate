import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateProfesoresPageRoutingModule } from './update-profesores-routing.module';

import { UpdateProfesoresPage } from './update-profesores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateProfesoresPageRoutingModule
  ],
  declarations: [UpdateProfesoresPage]
})
export class UpdateProfesoresPageModule {}
