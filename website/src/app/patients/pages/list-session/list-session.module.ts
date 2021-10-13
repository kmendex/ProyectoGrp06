import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSessionPageRoutingModule } from './list-session-routing.module';

import { ListSessionPage } from './list-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSessionPageRoutingModule
  ],
  declarations: [ListSessionPage]
})
export class ListSessionPageModule {}
