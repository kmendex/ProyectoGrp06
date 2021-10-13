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
    path: 'list-patient',
    loadChildren: () => import('./patients/pages/list-patient/list-patient.module').then( m => m.ListPatientPageModule)
  },
  {
    path: 'list-activity/:name',
    loadChildren: () => import('./patients/pages/list-activity/list-activity.module').then( m => m.ListActivityPageModule)
  },
  {
    path: 'view-activity/:id',
    loadChildren: () => import('./patients/pages/view-activity/view-activity.module').then( m => m.ViewActivityPageModule)
  },
  {
    path: 'view-video',
    loadChildren: () => import('./patients/pages/view-video/view-video.module').then( m => m.ViewVideoPageModule)
  },
  {
    path: 'view-patient/:id',
    loadChildren: () => import('./patients/pages/view-patient/view-patient.module').then( m => m.ViewPatientPageModule)
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./patients/pages/add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'update-patient/:id',
    loadChildren: () => import('./patients/pages/update-patient/update-patient.module').then( m => m.UpdatePatientPageModule)
  },


  
  {
    path: 'pacientes',
    loadChildren: () => import('./patients/pages/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'view-session/:id',
    loadChildren: () => import('./patients/pages/view-session/view-session.module').then( m => m.ViewSessionPageModule)
  },
  {
    path: 'list-session',
    loadChildren: () => import('./patients/pages/list-session/list-session.module').then( m => m.ListSessionPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
