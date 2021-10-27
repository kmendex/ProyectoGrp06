import { Component, OnInit } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  goToGame(){
    this.route.navigate(['/actividades/juego']);
  }

}
