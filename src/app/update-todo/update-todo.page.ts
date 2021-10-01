import { Component, OnInit } from '@angular/core';

import { CrudService } from './../services/crud.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";



@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.page.html',
  styleUrls: ['./update-todo.page.scss'],
})

export class UpdateTodoPage implements OnInit {

  editForm: FormGroup;
  id: any;

  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder
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

  onSubmit() {
    this.crudService.update(this.id, this.editForm.value)
  }

}
