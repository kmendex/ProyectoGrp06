import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignUpComponent } from 'src/app/auth/components/sign-up/sign-up.component';
@Component({
  selector: 'app-info-banner',
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.scss'],
})
export class InfoBannerComponent implements OnInit {

  constructor(private modalController: ModalController) { }


  ngOnInit() {}

  async registerModal() {
    //this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: SignUpComponent,
      cssClass: 'sign-up-popover-class'
    });
    return await modal.present();
  }

}
