import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAlumnosPageRoutingModule } from './create-alumnos-routing.module';

import { CreateAlumnosPage } from './create-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAlumnosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateAlumnosPage]
})
export class CreateAlumnosPageModule {}
