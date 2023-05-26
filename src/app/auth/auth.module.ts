import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule ,Routes} from '@angular/router';

const authRoutes:Routes =[
  {path:'',component:LoginComponent},
  { path:'login', component: LoginComponent},
  {path:'signup',component:SignupComponent},
];


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes),
  ],
  exports: [RouterModule,
    LoginComponent,
    SignupComponent]

})
export class AuthModule { 
  constructor(){
    console.log('authmodule loaded');
  }
}
