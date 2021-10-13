import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSessionPage } from './list-session.page';

const routes: Routes = [
  {
    path: '',
    component: ListSessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSessionPageRoutingModule {}
