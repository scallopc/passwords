import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPage } from '../add/add.page';
import { HomePage } from '../home/home.page';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children:[
      {
        path: 'add',
        outlet: 'menucontent',
        component: AddPage
      },
      {
        path: 'home',
        outlet: 'menucontent',
        component: HomePage
      }

    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
