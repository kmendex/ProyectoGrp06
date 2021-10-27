import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SignInComponent } from 'src/app/auth/components/sign-in/sign-in.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async presentPopover(ev: any) {
    const modal = await this.modalController.create({
      component: SignInComponent,
      cssClass: 'sign-up-popover-class'
    });
    return await modal.present();
  }

}
