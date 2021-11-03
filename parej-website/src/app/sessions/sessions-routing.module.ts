import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SessionsPage } from './pages/sessions/sessions.page';

const routes: Routes = [

  {
    path: 'sesiones', component: SessionsPage
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
