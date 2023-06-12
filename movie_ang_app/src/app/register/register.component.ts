import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from './register.service';
import { User } from '../user/user';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private registerService:RegisterService,private router:Router,private route:ActivatedRoute,private _snackBar:MatSnackBar) { }


  credentials={
    loginId:'',
    firstname:'',
    lastname:'',
    email:'',
    role:'customer',
    question:'',
    answer:'',
    password:'',
    confirmpassword:'',
    contact:'',
  }


  createUser():User {
   let user :User = new User();
    user.loginId=this.credentials.loginId;
    user.firstName=this.credentials.firstname;
    user.lastName=this.credentials.lastname;
    user.role=this.credentials.role;
    user.email=this.credentials.email;
    user.question=this.credentials.question;
    user.answer=this.credentials.answer;
    user.password=this.credentials.password;
    user.contact= +this.credentials.contact;
    
    return user;
  }
  
  onSubmit(form:NgForm)
  {
    console.log(form.value);
    console.log(form.valid);
    console.log(form.value.password);
     console.log(form.value.confirmpassword);
    
   if(form.valid && form.value.password===form.value.confirmpassword)
   {


    this.registerService.register(this.createUser()).subscribe(
        data=>{
          
        console.log("registration called");
        console.log(data);
          
        this.openSnackBar("Registration Successful","Close");
          this.router.navigate(['']);

        },
        error=>{
          console.log(error);
        }
    )
      
    console.log("yes");
   // form.reset();
   }else
   {
    alert("Fill up again");
    console.log("no");
   
   } 
  }


  
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}


}

