import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoginPage } from './ui-login/ui-login.page';
import { MenuPageModule } from '../pages/menu/menu.module';
import { PagesModule } from '../pages/pages.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [UiLoginPage],
  imports: [
    CommonModule,
    PagesModule,
    ComponentsModule
  ],
  exports: [UiLoginPage],

})
export class LoginModule { }
