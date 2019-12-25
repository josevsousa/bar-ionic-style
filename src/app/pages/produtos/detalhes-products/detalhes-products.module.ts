import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesProductsPageRoutingModule } from './detalhes-products-routing.module';

import { DetalhesProductsPage } from './detalhes-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesProductsPageRoutingModule
  ],
  declarations: [DetalhesProductsPage]
})
export class DetalhesProductsPageModule {}
