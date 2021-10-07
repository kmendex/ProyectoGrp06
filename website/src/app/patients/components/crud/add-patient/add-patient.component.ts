import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/patients/models/patient';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
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

  todoForm: FormGroup;

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,    
    private router: Router,
    public modalController: ModalController
  ) { }

  addPatient()
  {
    this.presentModal()
  }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      name: [''],
      address: [''],
      email: [''],
      phoneNumber1: [''],
      phoneNumber2: ['']
    })
  }

  async presentModal() 
  {
    const modal = await this.modalController.create({
      component: PatientsListComponent,
      cssClass: 'add-patient-class'
    });
    return await modal.present();
  }



  onSubmit() {
    if (!this.todoForm.valid) {
      return false;
    } else {
      this.crudService.create(this.todoForm.value)
      .then(() => {
        this.todoForm.reset();
        this.router.navigate(['/pacientes']);
      }).catch((err) => {
        console.log(err)
      });
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Por favor ingrese un correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo incorrecto, por favor introduzca uno válido' : '';
  }
}
