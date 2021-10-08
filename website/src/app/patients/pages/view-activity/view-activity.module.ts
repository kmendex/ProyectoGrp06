import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewActivityPageRoutingModule } from './view-activity-routing.module';

import { ViewActivityPage } from './view-activity.page';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule,
    ViewActivityPageRoutingModule
  ],
  declarations: [ViewActivityPage]
})
export class ViewActivityPageModule {}
