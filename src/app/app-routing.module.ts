import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './sharedmodule/navbar/navbar.component';
import { PlaceorderComponent } from './sharedmodule/placeorder/placeorder.component';
import { AuthModule } from './auth/auth.module';
import { SpecialofferComponent } from './sharedmodule/specialoffer/specialoffer.component';
import { CategoryComponent } from './sharedmodule/category/category.component';
import { SearchproductComponent } from './sharedmodule/searchproduct/searchproduct.component';
import { FooterComponent } from './sharedmodule/footer/footer.component';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';



const routes: Routes = [
  { path:'', component:NavbarComponent},
  // { path:'home',loadChildren: () => import('./sharedmodule/sharedmodule.module').then(m => m.SharedmoduleModule)},

  // { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // {path:'signup', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
