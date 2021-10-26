import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAsignaturasPageRoutingModule } from './update-asignaturas-routing.module';

import { UpdateAsignaturasPage } from './update-asignaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAsignaturasPageRoutingModule
  ],
  declarations: [UpdateAsignaturasPage]
})
export class UpdateAsignaturasPageModule {}
