import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { IonicModule } from '@ionic/angular';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PatientsViewComponent } from './components/patients-view/patients-view.component';
import { AddPatientComponent } from './components/crud/add-patient/add-patient.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddPatientComponent,PatientsListComponent, PatientsViewComponent],
  exports:[AddPatientComponent,PatientsListComponent, PatientsViewComponent],
  imports: [
    IonicModule
    ,MatTableModule
    ,MatInputModule
    ,MatButtonModule
    ,MatFormFieldModule
    ,MatInputModule
    ,ReactiveFormsModule
    ,FormsModule
    ,CommonModule
  ]
})
export class PatientsModule { }
