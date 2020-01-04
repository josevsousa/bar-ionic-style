import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDespesasPageRoutingModule } from './list-despesas-routing.module';

import { ListDespesasPage } from './list-despesas.page';


import { primeiraMaiusculaPipe } from "../../../pipes/primeira-maiuscula.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDespesasPageRoutingModule
  ],
  declarations: [
    ListDespesasPage,
    primeiraMaiusculaPipe
  ]
})
export class ListDespesasPageModule {}
