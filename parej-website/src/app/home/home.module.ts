import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBannerComponent } from './components/info-banner/info-banner.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponentComponent,InfoBannerComponent],
  exports:[HomeComponentComponent,InfoBannerComponent],
  imports: [
    CommonModule
    ,IonicModule
    ,SharedModule
  ]
})
export class HomeModule { }
