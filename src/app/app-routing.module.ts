import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './sharedmodule/navbar/navbar.component';
import { PlaceorderComponent } from './sharedmodule/placeorder/placeorder.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path:'', component:NavbarComponent},
  { path:'home',loadChildren: () => import('./sharedmodule/sharedmodule.module').then(m => m.SharedmoduleModule)},

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path:'signup', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
