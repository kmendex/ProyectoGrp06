import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPatientPageRoutingModule } from './view-patient-routing.module';

import { ViewPatientPage } from './view-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ViewPatientPageRoutingModule
  ],
  declarations: [ViewPatientPage]
})
export class ViewPatientPageModule {}
