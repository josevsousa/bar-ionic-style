import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesaStartPage } from './mesa-start.page';

const routes: Routes = [
  {
    path: '',
    component: MesaStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesaStartPageRoutingModule {}
