import { Component, OnInit, ViewChild } from '@angular/core';
import { Session } from '../../models/session';
import { SessionsService } from '../../services/sessions.service';
@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss'],
})
export class SessionsListComponent implements OnInit {
  
  sessions:Session[]=[];
  
  constructor(private sessionsService: SessionsService) { 
    this.sessionsService.getSessions().subscribe(res =>{
      this.sessions = res;
      console.log(this.sessions.length);
    });
  }

  ngOnInit() {
  }

  deleteRow(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.sessions.splice(cod, 1);
      //this.table1.renderRows();
    }
  }

  loadSessions(){
  }

}
