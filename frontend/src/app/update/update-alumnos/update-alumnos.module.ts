import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAlumnosPageRoutingModule } from './update-alumnos-routing.module';

import { UpdateAlumnosPage } from './update-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAlumnosPageRoutingModule
  ],
  declarations: [UpdateAlumnosPage]
})
export class UpdateAlumnosPageModule {}
