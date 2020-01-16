import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesaStartPageRoutingModule } from './mesa-start-routing.module';

import { MesaStartPage } from './mesa-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesaStartPageRoutingModule
  ],
  declarations: [MesaStartPage]
})
export class MesaStartPageModule {}
