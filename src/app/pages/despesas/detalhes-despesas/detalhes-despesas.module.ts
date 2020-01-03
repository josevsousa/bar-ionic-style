import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesDespesasPageRoutingModule } from './detalhes-despesas-routing.module';

import { DetalhesDespesasPage } from './detalhes-despesas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesDespesasPageRoutingModule
  ],
  declarations: [DetalhesDespesasPage]
})
export class DetalhesDespesasPageModule {}
