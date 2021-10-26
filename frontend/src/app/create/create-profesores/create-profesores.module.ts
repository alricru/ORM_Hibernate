import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProfesoresPageRoutingModule } from './create-profesores-routing.module';

import { CreateProfesoresPage } from './create-profesores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProfesoresPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateProfesoresPage]
})
export class CreateProfesoresPageModule {}
