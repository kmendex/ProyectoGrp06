import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePatientPageRoutingModule } from './update-patient-routing.module';

import { UpdatePatientPage } from './update-patient.page';
import {RouterModule} from '@angular/router';
//import { PatientsModule } from '../../patients.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    //PatientsModule,
    UpdatePatientPageRoutingModule
  ],
  declarations: [UpdatePatientPage]
})
export class UpdatePatientPageModule {}
