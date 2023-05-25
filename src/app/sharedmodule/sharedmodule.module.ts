import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SpecialofferComponent } from './specialoffer/specialoffer.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SpecialofferComponent,
    CategoryComponent,
    SearchproductComponent,
  ],
  imports: [
    CommonModule,
   
  ]
})
export class SharedmoduleModule { }
