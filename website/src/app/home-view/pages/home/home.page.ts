import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from '../../../patients/services/crud.service';
import { Router } from "@angular/router";
export class TODO {
  $key: string;
  name: string;
  pass: string;
  id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  Tasks: TODO[];
  editForm: FormGroup;
  name: any;
  pass: any;

  constructor(public formBuilder: FormBuilder, private crudService: CrudService, private router: Router) { 
    // this.crudService.getTasks().subscribe((data) => {
    //   this.editForm = this.formBuilder.group({
    //     name: [data['name']],
    //     pass: [data['pass']],
    //   })
    // });

  }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      name: [''],
      pass: [''],
      id:['']
    })

    this.crudService.getTasks().subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODO
        };
      })
    });

  }
  onSubmit() {

    for(var i = 0; i < this.Tasks.length; i++)
    {
      if (this.Tasks[i].name == this.editForm.value.name && this.Tasks[i].pass == this.editForm.value.pass) {
        this.router.navigate(['/list-activity/'+this.Tasks[i].name]);
        //this.crudService.getTasksActivitys(this.Tasks[i].id)
      }
    }

  }


}





    // for (let task in this.Tasks) {
    //   console.log(task)
      
    //   let fieldValues = JSON.parse(task)

    //   let keys = Object.keys(fieldValues)

    //   let values = keys.map(k => fieldValues[k])

    //   console.log(keys)
    //   console.log(values)

    //   console.log(task['name'])