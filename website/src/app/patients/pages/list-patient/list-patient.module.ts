import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPatientPageRoutingModule } from './list-patient-routing.module';

import { ListPatientPage } from './list-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListPatientPageRoutingModule
  ],
  declarations: [ListPatientPage]
})
export class ListPatientPageModule {}
