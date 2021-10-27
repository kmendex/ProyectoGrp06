import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDetailComponent } from './components/activity-detail/activity-detail.component';
import { ActivityGameComponent } from './components/activity-game/activity-game.component';
import { ActivitiesViewComponent } from './components/activities-view/activities-view.component';
import { IonicModule } from '@ionic/angular';
import { YouTubePlayer } from '@angular/youtube-player';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SemanticsGamePanelComponent } from './components/semantics-game-panel/semantics-game-panel.component';
@NgModule({
  declarations: [ActivityDetailComponent,ActivityGameComponent, ActivitiesViewComponent, SemanticsGamePanelComponent],
  exports: [ActivityDetailComponent,ActivityGameComponent, ActivitiesViewComponent, SemanticsGamePanelComponent],
  imports: [
    CommonModule
    ,IonicModule
    ,YouTubePlayerModule
    ,DragDropModule
  ]
})
export class ActivitiesModule { }
