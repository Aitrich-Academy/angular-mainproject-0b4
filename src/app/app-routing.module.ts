import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './sharedmodule/navbar/navbar.component';
import { FooterComponent } from './sharedmodule/footer/footer.component';

const routes: Routes = [
  { path:'', component:NavbarComponent},
  { path:'home', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
