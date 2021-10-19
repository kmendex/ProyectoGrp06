import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListActivityPageRoutingModule } from './list-activity-routing.module';

import { ListActivityPage } from './list-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListActivityPageRoutingModule
  ],
  declarations: [ListActivityPage]
})
export class ListActivityPageModule {}
