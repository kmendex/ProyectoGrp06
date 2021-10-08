import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home-view/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./patients/pages/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'update-patient/:id',
    loadChildren: () => import('./patients/pages/update-patient/update-patient.module').then( m => m.UpdatePatientPageModule)
  },
  {
    path: 'list-activity/:name',
    loadChildren: () => import('./patients/pages/list-activity/list-activity.module').then( m => m.ListActivityPageModule)
  },
  {
    path: 'view-activity/:id',
    loadChildren: () => import('./patients/pages/view-activity/view-activity.module').then( m => m.ViewActivityPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
