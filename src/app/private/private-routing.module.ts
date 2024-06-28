import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : '', redirectTo : 'dashboard', pathMatch :'full' }, 
  //{ path : 'dashboard', component : DashboardComponent, loadChildren : () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) }, 
  { path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
