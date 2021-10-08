import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ModalController } from '@ionic/angular';
import { PatientsListComponent } from '../../patients-list/patients-list.component';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss'],
})
export class UpdatePatientComponent implements OnInit {

  constructor(){}
  ngOnInit() {
  
  }
    // editForm: FormGroup;
  // id: any;

  // constructor(
  //   private crudService: CrudService,
  //   private activatedRoute: ActivatedRoute,
  //   private router: Router,
  //   public formBuilder: FormBuilder,
  //   public modalController: ModalController
  // ) {
  //   this.id = this.activatedRoute.snapshot.paramMap.get('id');
  //   this.crudService.getTask(this.id).subscribe((data) => {
  //     this.editForm = this.formBuilder.group({
  //       name: [data['name']],
  //       address: [data['address']],
  //       email: [data['email']],
  //       phoneNumber1: [data['phoneNumber1']],
  //       phoneNumber2: [data['phoneNumber2']]
  //     })
  //   });
  // }

  // addPatient()
  // {
  //   this.presentModal()
  // }

  // ngOnInit() {
  //   this.editForm = this.formBuilder.group({
  //     name: [''],
  //     address: [''],
  //     email: [''],
  //     phoneNumber1: [''],
  //     phoneNumber2: ['']
  //   })    
  // }

  // async presentModal() 
  // {
  //   const modal = await this.modalController.create({
  //     component: PatientsListComponent,
  //     cssClass: 'add-patient-class'
  //   });
  //   return await modal.present();
  // }

  // onSubmit() {
  //   this.crudService.update(this.id, this.editForm.value)
  // }

}
