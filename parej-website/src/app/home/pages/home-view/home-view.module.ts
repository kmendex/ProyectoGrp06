import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeViewPageRoutingModule } from './home-view-routing.module';

import { HomeViewPage } from './home-view.page';
import { AuthModule } from '../../../auth/auth.module';
import { HomeModule } from '../../home.module';

@NgModule({
  imports: [
    AuthModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomeViewPageRoutingModule,
    HomeModule
  ],
  declarations: [HomeViewPage]
})
export class HomeViewPageModule {}
