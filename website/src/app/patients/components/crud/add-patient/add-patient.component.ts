import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/patients/models/patient';
import {FormControl, Validators, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PatientsListComponent } from '../../patients-list/patients-list.component';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})

export class AddPatientComponent implements OnInit 
{
  newPatient = new Patient();
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    public modalController: ModalController
  ) { }

  addPatient()
  {
    this.presentModal()
  }

  ngOnInit() { }

  async presentModal() 
  {
    const modal = await this.modalController.create({
      component: PatientsListComponent,
      cssClass: 'add-patient-class'
    });
    return await modal.present();
  }

  onSubmit() {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Por favor ingrese un correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo incorrecto, por favor introduzca uno válido' : '';
  }
}
