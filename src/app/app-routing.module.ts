import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivateComponent } from './private/private.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path : '', redirectTo : 'public', pathMatch :'full' }, 
  { path : 'public', component : PublicComponent, loadChildren : () => import('./public/public.module').then((m) => m.PublicModule) }, 
  { path : 'private', component : PrivateComponent, loadChildren : () => import('./private/private.module').then((m) => m.PrivateModule), canActivate: [AuthGuard] }, 
  { path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
