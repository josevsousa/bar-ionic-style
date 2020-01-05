import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProductsPageRoutingModule } from './list-products-routing.module';

import { ListProductsPage } from './list-products.page';

// import { primeiraMaiusculaPipe } from "../../../pipes/primeira-maiuscula.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProductsPageRoutingModule
  ],
  declarations: [
    ListProductsPage,
    // primeiraMaiusculaPipe
  ]
})
export class ListProductsPageModule {}
