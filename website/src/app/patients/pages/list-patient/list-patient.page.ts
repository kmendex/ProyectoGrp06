import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from './../../services/crud.service';

export class TODO {
  $key: string;
  name: string;
  email: string;
  id: string;
}

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.page.html',
  styleUrls: ['./list-patient.page.scss'],
})

export class ListPatientPage implements OnInit 
{
  Tasks: TODO[];

  constructor(public modalController: ModalController, private crudService: CrudService) { }
  
  ngOnInit() {
    this.crudService.getTasks().subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODO
        };
      })
    });
  }

  remove(id) {
    console.log(id)
    if (window.confirm('Are you sure?')) {
      this.crudService.delete(id)
    }
  }  

}







  
  // todoList() {
  //   this.crudService.getTasks()
  //   .subscribe((data) => {
  //     console.log(data)
  //   })
  // }