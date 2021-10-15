import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from './../../services/crud.service';

export class TODO {
  $key: string;
  description: string;
  fisioterapeuta: string;
  id: string;
}
@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.page.html',
  styleUrls: ['./list-session.page.scss'],
})
export class ListSessionPage implements OnInit {

  tipo: string;
  Tasks: TODO[];
  Tasks_backup: TODO[];
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  sliderConfigWeb = {
    slidesPerView: 6.6,
    spaceBetween: 10,
    centeredSlides: false
  };
  slider = this.sliderConfigWeb

  constructor(public modalController: ModalController, private crudService: CrudService) { }
  
  async ngOnInit() {
    this.crudService.getTasksSessions().subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODO
        };
      })
    });

    this.crudService.getTasksSessions().subscribe((res) => {
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
      if (current.fisioterapeuta && searchTerm) {
        return (current.fisioterapeuta.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
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
