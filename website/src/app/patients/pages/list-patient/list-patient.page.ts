import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from './../../services/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
export class TODO {
  $key: string;
  name: string;
  email: string;
  id: string;
  png: string;
}

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.page.html',
  styleUrls: ['./list-patient.page.scss'],
})

export class ListPatientPage implements OnInit 
{
  Tasks: TODO[];
  Tasks_backup: TODO[];
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  sliderConfigWeb = {
    slidesPerView: 8.6,
    spaceBetween: 10,
    centeredSlides: false
  };
  slider = this.sliderConfigWeb

  constructor(
    public modalController: ModalController, 
    private crudService: CrudService
    ) { }
  
  async ngOnInit() {
    this.crudService.getTasks().subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODO
        };
      })
    });

    this.crudService.getTasks().subscribe((res) => {
      this.Tasks_backup = res.map((t) => {
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

  async filterList(evt) {
    const searchTerm = evt.srcElement.value;
    console.log(searchTerm)

    if(searchTerm === ""){
      this.Tasks = this.Tasks_backup
    }

    if (!searchTerm) {
      return;
    }
  
    this.Tasks = this.Tasks.filter(current => {
      if (current.name && searchTerm) {
        return (current.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  changeView(){
    if(this.slider === this.sliderConfig){
      this.slider = this.sliderConfigWeb
    } else{
      this.slider = this.sliderConfig
    }
  }
}






  // setTipo(){
  //   this.tipo = this.Tasks[0].tipo
  //   console.log(this.tipo)
  // }
  // sleep(milliseconds) {
  //   const date = Date.now();
  //   let currentDate = null;
  //   do {
  //     currentDate = Date.now();
  //   } while (currentDate - date < milliseconds);
  // }

    //this.sleep(3000);





  
  // todoList() {
  //   this.crudService.getTasks()
  //   .subscribe((data) => {
  //     console.log(data)
  //   })
  // }