import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { Router, ActivatedRoute } from "@angular/router";

export class TODO {
  $key: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.page.html',
  styleUrls: ['./list-activity.page.scss'],
})
export class ListActivityPage implements OnInit {

  Tasks: TODO[];

  id: any;

  constructor(private crudService: CrudService,private activatedRoute: ActivatedRoute,) { 

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

}
