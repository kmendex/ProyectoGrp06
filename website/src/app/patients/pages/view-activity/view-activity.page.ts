import { Plugins } from '@capacitor/core';
import * as PluginsLibrary from 'capacitor-video-player';
const { CapacitorVideoPlayer, Device } = Plugins;



import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService,Video } from './../../services/crud.service';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';


@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.page.html',
  styleUrls: ['./view-activity.page.scss'],
})
export class ViewActivityPage implements AfterViewInit {

  // options: VideoOptions
  videos: Video[];
  videoPlayer: any;
  editForm: FormGroup;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private crudService: CrudService
  ) {

    this.editForm = this.formBuilder.group({
      name: [''],
      title: [''],
      description: ['']
    })

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTasksActivity(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        name: [data['name']],
        title: [data['title']],
        description: [data['description']]
      })
    });

    this.videos = crudService.getVidoes();

    // this.options = {
    //   scalingMode: 0,
    //   volume: 0.5
    // };
  }

  // ngOnInit() {

  //   this.editForm = this.formBuilder.group({
  //     name: [''],
  //     title: [''],
  //     description: ['']
  //   })
  // }

  async ngAfterViewInit() {
    const info = await Device.getInfo();
    if (info.platform === "ios" || info.platform === "android") {
      this.videoPlayer = CapacitorVideoPlayer;
    } else {
      this.videoPlayer = PluginsLibrary.CapacitorVideoPlayer
    }
  }
  async play(url: string) {
    document.addEventListener('jeepCapVideoPlayerPlay', (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPlay ', e.detail) }, false);
    document.addEventListener('jeepCapVideoPlayerPause', (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPause ', e.detail) }, false);
    document.addEventListener('jeepCapVideoPlayerEnded', (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerEnded ', e.detail) }, false);
    const res: any = await this.videoPlayer.initPlayer({ mode: "fullscreen", url: url });
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
