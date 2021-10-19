import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { ActivatedRoute } from "@angular/router";

export class TODO {
  $key: string;
  title: string;
  description: string;
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
  id: any;
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
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute
    ) { 

    this.id = this.activatedRoute.snapshot.paramMap.get('name');

  }

  ngOnInit() {
    this.crudService.getTasksActivitys(this.id).subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODO
        };
      })
    });
  }

  changeView(){
    if(this.slider === this.sliderConfig){
      this.slider = this.sliderConfigWeb
    } else{
      this.slider = this.sliderConfig
    }
  }

  accion() {
    var ancla = document.getElementsByClassName('nav-enlace');
    for (var i = 0; i < ancla.length; i++) {
      ancla[i].classList.toggle('desaparece')
    }
  }

}
