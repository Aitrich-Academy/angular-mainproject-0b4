import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';
import { MyorderComponent } from './myorder/myorder.component';



@NgModule({
  declarations: [
    
    
    UserprofileComponent,
    UsersidebarComponent,
    MyorderComponent

  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
