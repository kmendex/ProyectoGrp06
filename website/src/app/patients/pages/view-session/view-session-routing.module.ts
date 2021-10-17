import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSessionPage } from './view-session.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSessionPageRoutingModule {}
