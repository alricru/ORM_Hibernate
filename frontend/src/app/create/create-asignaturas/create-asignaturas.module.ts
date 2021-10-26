import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAsignaturasPageRoutingModule } from './create-asignaturas-routing.module';

import { CreateAsignaturasPage } from './create-asignaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAsignaturasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateAsignaturasPage]
})
export class CreateAsignaturasPageModule {}
