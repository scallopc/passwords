import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPage } from './menu/menu.page';
import { AddPage } from './add/add.page';
import { HomePage } from './home/home.page';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [MenuPage, AddPage, HomePage],
  imports: [
    CommonModule,
    ComponentsModule
    
  ],
  exports: [MenuPage, AddPage, HomePage],

})
export class PagesModule { }


