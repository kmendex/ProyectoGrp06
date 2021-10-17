import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from './../../services/crud.service';
import { Router } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.page.html',
  styleUrls: ['./view-activity.page.scss'],
})
export class ViewActivityPage implements OnInit {

  videoUrl!: SafeResourceUrl;
  url:any
  editForm: FormGroup;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.getTasksActivity(this.id).subscribe((data) => {
      this.url = [data['url']]
    });
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
  }

  run() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]+"?enablejsapi=1")
  }

}


    //this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]+"?html=5")
    //?enablejsapi=1" 



  // import { ViewChild } from '@angular/core';
  // import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
  // import { VgApiService, VgMediaDirective } from '@videogular/ngx-videogular/core';

  //@ViewChild(VgMediaDirective, { static: true }) media: VgMediaDirective;
  //api:VgApiService;
  //urlVideo:string=""

  // run() {
  //   this.urlVideo = this.url[0]
  // }


  // onPlayerReady(VgApiService api){
  //   this.urlVideo = this.url[0]

  //   this.api = api
  //   this.api.fsAPI.toggleFullscreen()
  // }





  // sleep(milliseconds) {
  //   const date = Date.now();
  //   let currentDate = null;
  //   do {
  //     currentDate = Date.now();
  //   } while (currentDate - date < milliseconds);
  // }

    //this.sleep(3000);

// http://static.videogular.com/assets/videos/videogular.mp4"