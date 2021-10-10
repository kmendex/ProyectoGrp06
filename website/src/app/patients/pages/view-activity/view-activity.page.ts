import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from './../../services/crud.service';

@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.page.html',
  styleUrls: ['./view-activity.page.scss'],
})
export class ViewActivityPage implements OnInit {

  editForm: FormGroup;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private crudService: CrudService
  ) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTasksActivity(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        name: [data['name']],
        title: [data['title']],
        description: [data['description']]
      })
    });
  }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      name: [''],
      title: [''],
      description: ['']
    })
  }

}
