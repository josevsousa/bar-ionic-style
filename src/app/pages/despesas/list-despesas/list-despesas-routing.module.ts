import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDespesasPage } from './list-despesas.page';

const routes: Routes = [
  {
    path: '',
    component: ListDespesasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDespesasPageRoutingModule {}
