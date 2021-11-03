import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../../models/session';

@Component({
  selector: 'app-sessions-cards',
  templateUrl: './sessions-cards.component.html',
  styleUrls: ['./sessions-cards.component.scss'],
})
export class SessionsCardsComponent implements OnInit {
  
  @Input() session : Session;
  
  constructor() { }

  ngOnInit() {}

}
