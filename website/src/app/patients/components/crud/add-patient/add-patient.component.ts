import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/patients/models/patient';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {
  newPatient = new Patient();
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit() {}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Por favor ingrese un correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo incorrecto, por favor introduzca uno válido' : '';
  }
}
