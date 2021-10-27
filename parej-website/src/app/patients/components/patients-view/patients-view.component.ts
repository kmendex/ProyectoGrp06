import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-patients-view',
  templateUrl: './patients-view.component.html',
  styleUrls: ['./patients-view.component.scss'],
})
export class PatientsViewComponent implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {}

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
