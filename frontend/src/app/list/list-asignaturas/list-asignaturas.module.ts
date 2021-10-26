import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAsignaturasPageRoutingModule } from './list-asignaturas-routing.module';

import { ListAsignaturasPage } from './list-asignaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAsignaturasPageRoutingModule
  ],
  declarations: [ListAsignaturasPage]
})
export class ListAsignaturasPageModule {}
