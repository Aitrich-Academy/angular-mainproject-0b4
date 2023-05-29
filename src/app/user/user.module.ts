import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';
import { MyorderComponent } from './myorder/myorder.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { ShippingComponent } from './shipping/shipping.component';


@NgModule({
  declarations: [
    
    
    UserprofileComponent,
    UsersidebarComponent,
    MyorderComponent,
    UsernavbarComponent,
    ShippingComponent

  ],
  imports: [
    CommonModule,
    SharedmoduleModule
  ]
  
})
export class UserModule { }
