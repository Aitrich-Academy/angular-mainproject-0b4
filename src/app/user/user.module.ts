import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';
import { MyorderComponent } from './myorder/myorder.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AuthModule } from '../auth/auth.module';
import { Routes,RouterModule,Router } from '@angular/router';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { LogoutComponent } from '../auth/logout/logout.component';
import { UserOrderhistoryComponent } from './user-orderhistory/user-orderhistory.component';

const userhome: Routes = [
  { path:'', component:UserprofileComponent},
  { path:'userlanding', component:UserprofileComponent},
  { path:'logout', component:LogoutComponent},
  { path:'useroh', component:UserOrderhistoryComponent}
];


@NgModule({
  declarations: [
    UserprofileComponent,
    UsersidebarComponent,
    MyorderComponent,
    UsernavbarComponent,
    ShippingComponent,
    UserOrderhistoryComponent

  ],
  imports: [
    CommonModule,
    SharedmoduleModule,
    AuthModule,
    RouterModule.forChild(userhome)
  ],
  exports:[
    RouterModule
  ]
  
})
export class UserModule {
  constructor(){
    console.log('user module loaded');
  }
 }
