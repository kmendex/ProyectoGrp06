import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { IonicModule } from '@ionic/angular';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PatientsViewComponent } from './components/patients-view/patients-view.component';
import { PatientsBarComponent } from './components/patients-bar/patients-bar.component';
import { PatientsCrudComponent } from './components/patients-crud/patients-crud.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [PatientsBarComponent,PatientsCrudComponent,PatientsListComponent,PatientsViewComponent],
  exports:[PatientsBarComponent,PatientsCrudComponent,PatientsListComponent, PatientsViewComponent],
  imports: [
    CommonModule
    ,IonicModule
    ,MatInputModule
    ,MatTableModule
    ,MatFormFieldModule
    ,MatButtonModule
    ,MatPaginatorModule
    ,FormsModule
    ,ReactiveFormsModule
    
  ]
})
export class PatientsModule { }
