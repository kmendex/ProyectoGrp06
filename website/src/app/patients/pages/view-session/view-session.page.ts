import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from './../../services/crud.service';

@Component({
  selector: 'app-view-session',
  templateUrl: './view-session.page.html',
  styleUrls: ['./view-session.page.scss'],
})
export class ViewSessionPage implements OnInit {

  editForm: FormGroup;
  id: any;
  png:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private crudService: CrudService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTaskSession(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        adress: [data['adress']],
        date: [data['date']],
        description: [data['description']],
        fisioterapeuta: [data['fisioterapeuta']],
        paciente: [data['paciente']],
        png: [data['png']],
        time: [data['time']]
      })
    });
  }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      adress: [''],
      date: [''],
      description: [''],
      fisioterapeuta: [''],
      paciente: [''],
      png: [''],
      time: ['']
    })
  }

  setPng(){
    this.png = this.editForm.value.png
  }

}
