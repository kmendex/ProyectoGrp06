import { Plugins,} from '@capacitor/core';
//import * as WebVPPlugin from 'capacitor-video-player';
import * as PluginsLibrary from 'capacitor-video-player';
const { CapacitorVideoPlayer} = Plugins;
//const { CapacitorVideoPlayer, Device } = Plugins;
import { Device } from '@capacitor/device';


import { Component, OnInit, ViewChild } from '@angular/core';
import { VgApiService, VgMediaDirective } from '@videogular/ngx-videogular/core';

import { VideoService,Video } from './../../services/video.service';
//import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';

//https://www.ionicanddjangotutorial.com/how-to-use-videogular2-with-ionic5/

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.page.html',
  styleUrls: ['./view-video.page.scss'],
})


export class ViewVideoPage {

  // options: VideoOptions
  // videos: Video[];
  // videoPlayer: any;
  // constructor(
  //   private videoService: VideoService
  // ) {



    
    
  //   //this.videos = videoService.getVidoes();

  //   // this.options = {
  //   //   scalingMode: 0,
  //   //   volume: 0.5
  //   // };
  // }

  @ViewChild(VgMediaDirective, { static: true }) media: VgMediaDirective;
  api:VgApiService;
  urlVideo:string=""
  items = [
    {
      "title":"External file",
      "url":"http://static.videogular.com/assets/videos/videogular.mp4",
      "imagePreview":"assets/earth.png"
    },
    {
      "title":"Local video file",
      "url":"assets/videogular.mp4",
      "imagePreview":"assets/earth.png"
    },
  ]
  constructor() {}
  playVideo(item){
   
    // Play video
    this.urlVideo=item.url
    if (this.media){
       this.media.vgMedia.src=this.urlVideo
       this.media.subscriptions.canPlay.subscribe((value)=>{
        //this.api.fsAPI.toggleFullscreen()
        this.media.play()
       })
    }
  }
  onPlayerReady(api:VgApiService){
    this.api = api
    this.urlVideo = this.items[0].url
   // this.api.fsAPI.toggleFullscreen()
  }
}


  // async ngOnInit() {
  //   const info = await Device.getInfo();
  //   if (info.platform === "ios" || info.platform === "android") {
  //     this.videoPlayer = CapacitorVideoPlayer;
  //   } else {
  //     this.videoPlayer = PluginsLibrary.CapacitorVideoPlayer
  //   }
  // }

 

  // async play(url: string) {
  //   document.addEventListener('jeepCapVideoPlayerPlay', (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPlay ', e.detail) }, false);
  //   document.addEventListener('jeepCapVideoPlayerPause', (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPause ', e.detail) }, false);
  //   document.addEventListener('jeepCapVideoPlayerEnded', (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerEnded ', e.detail) }, false);
  //   const res: any = await this.videoPlayer.initPlayer({ mode: "fullscreen", url: url });
  // }







   // ngOnInit() {}

  // playVideo()
  // {
  //   var url = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  
  //   var mode = "fullscreen";

  //   CapacitorVideoPlayer.initPlayer({
  //     mode:mode,
  //     url:url,
  //     playerId:"vplayer",
  //     componentTag:"vplayer"
  //   }).then(()=>{

  //   },(err)=>{
  //     alert(JSON.stringify(err));
  //   })
  
  // }









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


