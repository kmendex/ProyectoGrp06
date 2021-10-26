import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Patient } from '../../models/patient';
import { PatientsService } from '../../services/patients.service';
@Component({
  selector: 'app-patients-crud',
  templateUrl: './patients-crud.component.html',
  styleUrls: ['./patients-crud.component.scss'],
})
export class PatientsCrudComponent implements OnInit {
  newPatient= new Patient()
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor( private patientsService:PatientsService) { }

  ngOnInit() {}

  addPatient(){
    this.patientsService.addPatient(this.newPatient);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Por favor ingrese un correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo incorrecto, por favor introduzca uno válido' : '';
  }

}
