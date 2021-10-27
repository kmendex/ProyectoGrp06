import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [HeaderComponent,MenuComponent],
  exports:[HeaderComponent,MenuComponent],
  imports: [
    CommonModule
    ,IonicModule
  ]
})
export class SharedModule { }
