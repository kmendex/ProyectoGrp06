import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { ActivatedRoute } from "@angular/router";

export class TODO {
  $key: string;
  title: string;
  description: string;
  id: string;
  category: string;
}
export class TODOP {
  $key: string;
  name: string;
  email: string;
  id: string;
  png: string;
}
export class TODOS {
  $key: string;
  description: string;
  fisioterapeuta: string;
  id: string;
}
@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.page.html',
  styleUrls: ['./list-activity.page.scss'],
})
export class ListActivityPage implements OnInit 
{
  Tasks: TODO[];
  Tasks_backup: TODO[];
  TasksP: TODOP[];
  Tasks_backupP: TODOP[];
  TasksS: TODOS[];
  Tasks_backupS: TODOS[];
  Tasks_result: TODOS[];
  id: any;
  sliderConfigWeb = {
    slidesPerView: 5.6,
    spaceBetween: 10,
    centeredSlides: false
  };
  // sliderConfig = {
  //   slidesPerView: 1.6,
  //   spaceBetween: 10,
  //   centeredSlides: true
  // };
  // sliderConfigWeb = {
  //   slidesPerView: 8.6,
  //   spaceBetween: 10,
  //   centeredSlides: false
  // };
  slider = this.sliderConfigWeb

  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute
    ) { 

    this.id = this.activatedRoute.snapshot.paramMap.get('name');

  }

  ngOnInit() {
    this.crudService.getTasksActivitysF(this.id).subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODO
        };
      })
    });

    this.crudService.getTasksActivitysF(this.id).subscribe((res) => {
      this.Tasks_backup = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODO
        };
      })
    });


    this.crudService.getTasksPacients(this.id).subscribe((res) => {
      this.TasksP = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODOP
        };
      })
    });

    this.crudService.getTasksPacients(this.id).subscribe((res) => {
      this.Tasks_backupP = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODOP
        };
      })
    });





    this.crudService.getTasksSessionsFilter(this.id).subscribe((res) => {
      this.TasksS = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODOS
        };
      })
    });

    this.crudService.getTasksSessionsFilter(this.id).subscribe((res) => {
      this.Tasks_backupS = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODOS
        };
      })
    });

  }

  // changeView(){
  //   if(this.slider === this.sliderConfig){
  //     this.slider = this.sliderConfigWeb
  //   } else{
  //     this.slider = this.sliderConfig
  //   }
  // }

  // accion() {
  //   var ancla = document.getElementsByClassName('nav-enlace');
  //   for (var i = 0; i < ancla.length; i++) {
  //     ancla[i].classList.toggle('desaparece')
  //   }
  // }

  // setCoodinacion(){
  //   this.Tasks = this.Tasks.filter(current => {
  //     return (current.category.indexOf("Coordinacion"));
  //   });
  // }

  // setMovilidad(){
  //   this.Tasks = this.Tasks.filter(current => {
  //     return (current.category.indexOf("Movilidad"));
  //   });
  // }

  // setReset(){
  //   this.Tasks = this.Tasks_backup
  // }

  async filterList(evt) {
    const searchTerm = evt.srcElement.value;
    console.log(searchTerm)

    if(searchTerm === ""){
      this.TasksP = this.Tasks_backupP
      this.TasksS = this.Tasks_backupS
      this.Tasks = this.Tasks_backup
    }

    if (!searchTerm) {
      return;
    }
  
    this.TasksP = this.TasksP.filter(current => {
      if (current.name && searchTerm) {
        return (current.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });

    this.TasksS = this.TasksS.filter(current => {
      if (current.fisioterapeuta && searchTerm) {
        return (current.fisioterapeuta.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });

    this.Tasks = this.Tasks.filter(current => {
      if (current.title && searchTerm) {
        return (current.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }



  
  close(id) {
    this.Tasks_result = []
    if (window.confirm('Estas seguro de que quieres desabilitar esta session?')) {
      for (var i = 0; i < this.TasksS.length; i++) {
        if (this.TasksS[i].id != id){
          this.Tasks_result.push(this.TasksS[i])
        }
      }
      this.TasksS = this.Tasks_result
    }
  }  


}
