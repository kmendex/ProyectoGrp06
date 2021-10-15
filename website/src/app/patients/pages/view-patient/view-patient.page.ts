import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from './../../services/crud.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.page.html',
  styleUrls: ['./view-patient.page.scss'],
})
export class ViewPatientPage implements OnInit {

  editForm: FormGroup;
  id: any;
  png:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private crudService: CrudService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTask(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        name: [data['name']],
        address: [data['address']],
        email: [data['email']],
        phoneNumber1: [data['phoneNumber1']],
        phoneNumber2: [data['phoneNumber2']],
        png: [data['png']]
      })
    });
  }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      name: [''],
      address: [''],
      email: [''],
      phoneNumber1: [''],
      phoneNumber2: [''],
      png: ['']
    })
  }

  setPng(){
    this.png = this.editForm.value.png
  }

}



// setTask(){
//   var Tasks = /** @class */ (function () {
//       function Task() {
//           this.age = 0;
//       }
//       return Profile;
//   }());

// // let myArray = [];
// // let commentData = {} as Dish;
// // commentData.id = 3;
// // commentData.name = 'something';
// // myArray.push(commentData);
//   this.Task[0].name = this.editForm.value.name
//   this.Task[0].address = this.editForm.value.address
//   this.Task[0].phoneNumber1 = this.editForm.value.phoneNumber1
//   this.Task[0].phoneNumber2 = this.editForm.value.phoneNumber2
//   this.Task[0].png = this.editForm.value.png
// }
