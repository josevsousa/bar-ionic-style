import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesProductsPage } from './detalhes-products.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesProductsPageRoutingModule {}
