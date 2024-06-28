import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { PropositionComponent } from './proposition/proposition.component';

const routes: Routes = [
  { path : '', redirectTo : 'dashboard', pathMatch :'full' }, 
  { path : 'dashboard', component : PropositionComponent, loadChildren : () => import('./proposition/proposition.module').then((m) => m.PropositionModule) }, 
  { path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
