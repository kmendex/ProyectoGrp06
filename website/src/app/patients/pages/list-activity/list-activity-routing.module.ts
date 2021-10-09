import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListActivityPage } from './list-activity.page';

const routes: Routes = [
  {
    path: '',
    component: ListActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListActivityPageRoutingModule {}
