import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SignInComponent } from 'src/app/auth/components/sign-in/sign-in.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SignInComponent,
      cssClass: 'sign-in-popover-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
