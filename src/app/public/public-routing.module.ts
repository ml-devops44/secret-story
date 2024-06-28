import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignonComponent } from './signon/signon.component';

const routes: Routes = [
  { path : '', redirectTo : 'login', pathMatch :'full' }, 
  { path : 'home', component : HomeComponent, loadChildren : () => import('./home/home.module').then((m) => m.HomeModule) },
  { path : 'signon', component : SignonComponent, loadChildren : () => import('./signon/signon.module').then((m) => m.SignonModule) }, 
  { path : 'login', component : LoginComponent, loadChildren : () => import('./login/login.module').then((m) => m.LoginModule) },  
  { path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
