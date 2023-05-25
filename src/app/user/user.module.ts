import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';



@NgModule({
  declarations: [
    
    
    UserprofileComponent,
    UsersidebarComponent

  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
