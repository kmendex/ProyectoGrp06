import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activities-view',
  templateUrl: './activities-view.component.html',
  styleUrls: ['./activities-view.component.scss'],
})
export class ActivitiesViewComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  goToDetail(){
    this.route.navigate(['/actividades/detalle'])
  }
}
