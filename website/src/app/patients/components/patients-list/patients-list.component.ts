import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MatTable } from '@angular/material/table';
import { Patient } from '../../models/patient';
import { AddPatientComponent } from '../crud/add-patient/add-patient.component';

@Component(
  {
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})

export class PatientsListComponent implements OnInit 
{
  searchtext='';

  patientsData : Patient[] =
  [
    new Patient('1', 'Juan Carlos Mendoza', 'Cartago', 'jcmendoza@email.com', '88888888', '77777777')
    ,new Patient('2', 'Juan Carlos Rodríguez', 'Cartago', 'jcmendoza@email.com', '88888888', '77777777')
    ,new Patient('3', 'Juan Carlos Mendoza', 'Uruca', 'jcmendoza@email.com', '88888888', '77777777')
  ];

  columns: string[] = ['Nombre', 'Dirección', 'Teléfono 1', 'Teléfono 2', 'Actualizar', 'Eliminar'];
  @ViewChild(MatTable) tabla1: MatTable<Patient>;
  
  constructor(public modalController: ModalController) 
  { 

  }
  
  search(event: any)
  {
    this.searchtext=event.detail.value;
    console.log(event.target.value);
  }
  
  borrarFila(cod: number) 
  {
    if (confirm("Realmente quiere borrarlo?")) {
      this.patientsData.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  addPatient()
  {
    this.presentModal()
  }

  ngOnInit() {}

  async presentModal() 
  {
    const modal = await this.modalController.create({
      component: AddPatientComponent,
      cssClass: 'add-patient-class'
    });
    return await modal.present();
  }

}
