import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadesPage } from './actividades.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadesPage
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'juego',
    loadChildren: () => import('./juego/juego.module').then( m => m.JuegoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadesPageRoutingModule {}
