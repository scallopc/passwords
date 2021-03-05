import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiLoginPage } from './ui-login.page';

const routes: Routes = [
  {
    path: '',
    component: UiLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiLoginPageRoutingModule {}
