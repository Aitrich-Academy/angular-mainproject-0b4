import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SpecialofferComponent } from './specialoffer/specialoffer.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { CategoryComponent } from './category/category.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { Routes,RouterModule,Router } from '@angular/router';
import { AuthModule } from '../auth/auth.module';

const shared: Routes = [
  { path:'', component:NavbarComponent},
  { path:'home', component:NavbarComponent},
  { path:'placeorder', component:PlaceorderComponent}

];
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SpecialofferComponent,
    CategoryComponent,
    SearchproductComponent,
    PlaceorderComponent
  ],
imports: [
    CommonModule,
    AuthModule,
    RouterModule.forRoot(shared)
  ],
  exports:[
    RouterModule
  ]
})
export class SharedmoduleModule { }
