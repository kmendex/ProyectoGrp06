import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSessionPageRoutingModule } from './view-session-routing.module';

import { ViewSessionPage } from './view-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSessionPageRoutingModule
  ],
  declarations: [ViewSessionPage]
})
export class ViewSessionPageModule {}
