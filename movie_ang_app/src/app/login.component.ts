import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { ApiService } from 'src/app/api.service';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from './user/user';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private role:string |any;
  private user:User |any;

  private token:Object|any;

  credentials={
    loginId:'',
    password:''
  }
  constructor(private loginService:LoginService,private apiService:ApiService,private router:Router,private route:ActivatedRoute,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm)
  {
   if((this.credentials.loginId!='' && this.credentials.password!='')&&(this.credentials.loginId!=null && this.credentials.password!=null))
   {

    this.loginService.getUserById(this.credentials.loginId).subscribe(
        data=>{
          this.role=data.role;
          this.user=data;
          //this.user.password=this.credentials.password;

          if(this.user.password===this.credentials.password){
     //  console.log(this.user);
        //console.log(this.role);
        console.log("generate token called");  

    this.loginService.generateToken(this.user,this.role).subscribe(
      (res:any)=>{
          
      },
      err=>{
        this.token=err.error['Token:'];
        //console.log(this.token);
        this.loginService.loginUser(this.token);
        this.openSnackBar("Successffully logged in","Close");
        this.router.navigate(['/movie']);
      //  window.location.href="/movie";
      }
    )
          }else
          {
            this.openSnackBar("Wrong credentials","Close");
           // alert("Wrong credentials");
          }

   
        },
        error=>{
          console.log(error);
        }
    )
      
    console.log("yes");
   // form.reset();
   }else
   {
    console.log("no");
   
   } 
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
