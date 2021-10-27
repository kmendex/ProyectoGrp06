import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDetailComponent } from './components/activity-detail/activity-detail.component';
import { ActivityGameComponent } from './components/activity-game/activity-game.component';
import { ActivitiesViewComponent } from './components/activities-view/activities-view.component';
import { IonicModule } from '@ionic/angular';
import { YouTubePlayer } from '@angular/youtube-player';
import { YouTubePlayerModule } from '@angular/youtube-player';
@NgModule({
  declarations: [ActivityDetailComponent,ActivityGameComponent, ActivitiesViewComponent],
  exports: [ActivityDetailComponent,ActivityGameComponent, ActivitiesViewComponent],
  imports: [
    CommonModule
    ,IonicModule
    ,YouTubePlayerModule
  ]
})
export class ActivitiesModule { }
