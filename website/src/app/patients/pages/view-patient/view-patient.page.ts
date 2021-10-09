import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from './../../services/crud.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.page.html',
  styleUrls: ['./view-patient.page.scss'],
})
export class ViewPatientPage implements OnInit {

  editForm: FormGroup;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private crudService: CrudService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTask(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        name: [data['name']],
        address: [data['address']],
        email: [data['email']],
        phoneNumber1: [data['phoneNumber1']],
        phoneNumber2: [data['phoneNumber2']]
      })
    });
  }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      name: [''],
      address: [''],
      email: [''],
      phoneNumber1: [''],
      phoneNumber2: ['']
    })
  }

}
