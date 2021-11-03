import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsListComponent } from './components/sessions-list/sessions-list.component';
import { IonicModule } from '@ionic/angular';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SessionsViewComponent } from './components/sessions-view/sessions-view.component';
import { SessionsCrudComponent } from './components/sessions-crud/sessions-crud.component';
import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsPage } from './pages/sessions/sessions.page';
import { SessionsCardsComponent} from './components/sessions-cards/sessions-cards.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
//import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [SessionsCrudComponent,SessionsListComponent, SessionsCardsComponent
    ,SessionsViewComponent, SessionsPage],
  exports:[SessionsCrudComponent,SessionsListComponent, SessionsViewComponent],
  imports: [
    CommonModule
    ,IonicModule
    ,MatInputModule
    ,MatTableModule
    ,MatFormFieldModule
    ,MatButtonModule
    ,MatSelectModule
    //,MatDatepickerModule
    ,MatPaginatorModule        
    ,FormsModule
    ,ReactiveFormsModule
    ,SessionsRoutingModule
  ]
})
export class SessionsModule { }
