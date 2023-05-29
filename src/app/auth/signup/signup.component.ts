import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,Validators,RequiredValidator } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  myForm:FormGroup;

  ngOnInit(){
    this.myForm= new FormGroup({
    name:new FormControl(null,[Validators.required]), 
    email:new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
    cpassword:new FormControl(null, [Validators.required]),
    address:new FormControl(null, [Validators.required]),
    });
 
   }
   onSubmit(){
    console.log(this.myForm);
   }
}
