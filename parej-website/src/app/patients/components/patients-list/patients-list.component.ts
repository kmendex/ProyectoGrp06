import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})
export class PatientsListComponent implements OnInit {
  columns: string[] = ['name', 'email', 'phoneNumber','editar', 'alta'];
  patients:Patient[]=[];
  @ViewChild(MatTable) table1: MatTable<Patient>;
  constructor() { }

  ngOnInit() {}

  deleteRow(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.patients.splice(cod, 1);
      this.table1.renderRows();
    }
  }

}
