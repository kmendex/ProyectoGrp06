import { Component, ViewChild } from '@angular/core';
import { VgApiService, VgMediaDirective } from '@videogular/ngx-videogular/core';

//https://www.ionicanddjangotutorial.com/how-to-use-videogular2-with-ionic5/
//npx cap add android
//npx cap sync
//npx cap update
//npx cap run android
@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.page.html',
  styleUrls: ['./view-video.page.scss'],
})


export class ViewVideoPage {

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
