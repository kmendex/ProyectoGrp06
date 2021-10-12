import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from './../../services/crud.service';
import { VgApiService, VgMediaDirective } from '@videogular/ngx-videogular/core';
import { Router } from "@angular/router";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


export class TODO {
  $key: string;
  url: string;
}

@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.page.html',
  styleUrls: ['./view-activity.page.scss'],
})
export class ViewActivityPage implements OnInit {

  //@ViewChild(VgMediaDirective, { static: true }) media: VgMediaDirective;
  //api:VgApiService;
  urlVideo:string=""

  url:any

  editForm: FormGroup;
  id: any;
  
  Tasks: TODO[];
  ruta:string

  constructor(
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router
  ) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.getTasksActivity(this.id).subscribe((data) => {
      this.url = [data['url']]
    });

    //this.urlVideo = this.url[0]

  }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      name: [''],
      title: [''],
      description: [''],
      url: ['']
    })

    this.crudService.getTasksActivity(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        name: [data['name']],
        title: [data['title']],
        description: [data['description']],
        url: [data['url']]
      })
    });



    this.crudService.getTasksActivity(this.id).subscribe((data) => {
      this.url = [data['url']]
    });

    // this.crudService.getTasksActivitys(this.id).subscribe((res) => {
    //   this.Tasks = res.values[3]
    // });


  }

  run() {

    this.ruta = this.url[0]
    console.log(this.url[0])
    this.urlVideo = this.url[0]
    //console.log(this.editForm.value.url)
    //this.url = this.editForm.value.url

    //this.urlVideo = this.editForm.value.url
    //this.urlVideo = this.url[0]
    
    //location.reload(); 
    //this.ruta = "view-video/..."+this.url
    //console.log(this.ruta)
    //this.router.navigate([this.ruta]);
    // this.urlVideo = this.editForm.value.url
  }
  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  onPlayerReady(){
    this.sleep(3000);
    //setTimeout(() => {  console.log("World!"); }, 10000);
    //this.api = api
    //this.run()
    //console.log(this.editForm.value.url)
    this.urlVideo = this.url[0]
    // if( this.urlVideo === ""){
    //   this.urlVideo = "http://static.videogular.com/assets/videos/videogular.mp4"
    // } else {
    //   console.log(this.urlVideo)
    // }
    // this.api.fsAPI.toggleFullscreen()
  }

}
