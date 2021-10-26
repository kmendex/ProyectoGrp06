import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PatientsCrudComponent } from '../patients-crud/patients-crud.component';
@Component({
  selector: 'app-patients-bar',
  templateUrl: './patients-bar.component.html',
  styleUrls: ['./patients-bar.component.scss'],
})
export class PatientsBarComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async newPatient() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: PatientsCrudComponent,
      cssClass: 'new-patient-popover-class'
    });
    return await modal.present();
  }

}
