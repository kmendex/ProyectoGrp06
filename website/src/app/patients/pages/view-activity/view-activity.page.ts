import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from './../../services/crud.service';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.page.html',
  styleUrls: ['./view-activity.page.scss'],
})
export class ViewActivityPage implements OnInit {

  // options: VideoOptions

  editForm: FormGroup;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private crudService: CrudService,
    private videoPlayer: VideoPlayer
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTasksActivity(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        name: [data['name']],
        title: [data['title']],
        description: [data['description']]
      })
    });

    // this.options = {
    //   scalingMode: 0,
    //   volume: 0.5
    // };
  }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      name: [''],
      title: [''],
      description: ['']
    })
  }


  // playLocalVideo() {
  //   // Playing a video.
  //   this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
  //     console.log('video completed');
  //   }).catch(err => {
  //     alert(err);
  //   });
  // }
  // playRemoteVideo() {
  //   // Playing a video.
  //   this.videoPlayer.play('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4').then(() => {
  //     console.log('video completed');
  //   }).catch(err => {
  //     alert(err);
  //   });
  // }

  // closeVideo() {
  //   this.videoPlayer.close();
  // }


}
