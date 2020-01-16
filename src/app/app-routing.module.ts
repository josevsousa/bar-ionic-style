import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { LoginGuard } from "./guards/login.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'list-products',
    loadChildren: () => import('./pages/produtos/list-products/list-products.module').then( m => m.ListProductsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detalhes-products',
    loadChildren: () => import('./pages/produtos/detalhes-products/detalhes-products.module').then( m => m.DetalhesProductsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list-despesas',
    loadChildren: () => import('./pages/despesas/list-despesas/list-despesas.module').then( m => m.ListDespesasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detalhes-despesass',
    loadChildren: () => import('./pages/despesas/detalhes-despesas/detalhes-despesas.module').then( m => m.DetalhesDespesasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list-despesas',
    loadChildren: () => import('./pages/despesas/list-despesas/list-despesas.module').then( m => m.ListDespesasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detalhes-despesas',
    loadChildren: () => import('./pages/despesas/detalhes-despesas/detalhes-despesas.module').then( m => m.DetalhesDespesasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'mesa-start',
    loadChildren: () => import('./pages/mesas/mesa-start/mesa-start.module').then( m => m.MesaStartPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
