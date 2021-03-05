import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UiLoginPage } from './login/ui-login/ui-login.page';
import { AddPage } from './pages/add/add.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full'
  },

 /* {
  path: '',
  //canActivate: [XAuthGuardService],
  children: [
    {
      path: 'menu',
      loadChildren: () => import('./pages/menu/menu.module').then(m=> m.MenuPageModule)
    }
  ] 
},*/
  {path: 'login', component: UiLoginPage},
  {path: 'home', component: HomePage,},
  {path: 'add', component: AddPage,},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
