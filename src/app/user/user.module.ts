import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialofferComponent } from './specialoffer/specialoffer.component';
import { CategoryComponent } from './category/category.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { UserprofileComponent } from './userprofile/userprofile.component';




@NgModule({
  declarations: [
    
    SpecialofferComponent,
    CategoryComponent,
    SearchproductComponent,
    UserprofileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
