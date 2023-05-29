import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule ,Routes} from '@angular/router';
import { LogoutComponent } from './logout/logout.component';

const authRoutes:Routes =[
  {path:'',component:LoginComponent},
  { path:'login', component: LoginComponent},
  {path:'signup',component:SignupComponent},
];


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes),
  ],
  exports: [
    RouterModule
  ]

})
export class AuthModule { 
  constructor(){
    console.log('authmodule loaded');
  }
}
