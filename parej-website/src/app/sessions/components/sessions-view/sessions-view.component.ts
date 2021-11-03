import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { SessionsCrudComponent} from '../sessions-crud/sessions-crud.component';

@Component({
  selector: 'app-sessions-view',
  templateUrl: './sessions-view.component.html',
  styleUrls: ['./sessions-view.component.scss'],
})
export class SessionsViewComponent implements OnInit {

  constructor(private menuCtrl: MenuController, 
    private modalController: ModalController) { }

  ngOnInit() {}
  
  toggleMenu(){    
    this.menuCtrl.toggle();
  }

  async newSession() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: SessionsCrudComponent,
      cssClass: 'new-patient-popover-class'
    });
    return await modal.present();
  }

}
