import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,Validators,RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // constructor(private router: Router) {}

  // navigateToRoute() {
  //   this.router.navigate(['/userlanding']);
  // }

  loginForm:FormGroup;

  ngOnInit(){
    this.loginForm= new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required])
    });
 
   }

   onSubmit()
   {
     console.log(this.loginForm);
   }
}
