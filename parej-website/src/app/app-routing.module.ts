import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home-view',
    pathMatch: 'full'
  },
  {
    path: 'home-view',
    loadChildren: () => import('./home/pages/home-view/home-view.module').then( m => m.HomeViewPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./patients/pages/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
