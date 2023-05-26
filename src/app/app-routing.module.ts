import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './sharedmodule/navbar/navbar.component';
import { PlaceorderComponent } from './sharedmodule/placeorder/placeorder.component';

const routes: Routes = [
  { path:'', component:NavbarComponent},
  { path:'home',loadChildren: () => import('./sharedmodule/sharedmodule.module').then(m => m.SharedmoduleModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
