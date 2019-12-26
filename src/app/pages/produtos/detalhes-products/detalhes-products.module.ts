import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesProductsPageRoutingModule } from './detalhes-products-routing.module';

import { DetalhesProductsPage } from './detalhes-products.page';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesProductsPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DetalhesProductsPage]
})
export class DetalhesProductsPageModule {}
