import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
import { UpdatePasswordService } from './updatepassword.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../user/user';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent {

  constructor(private service:UpdatePasswordService,private router:Router,private route:ActivatedRoute,private _snackBar:MatSnackBar){

    this.FillPassword();
  }

  credentials={
    loginId:'',
    old_password:'',
    new_password:'',
    confirm_password:'',
  }

user:User|any;

FillPassword(){
  this.service.getUser(this.route.snapshot.params['id']).subscribe(
    data=>
    {
      this.credentials.loginId=this.route.snapshot.params['id'];
      this.user=data;
      this.credentials.old_password=this.user.password;
    console.log("data=",data);
    },
    error=>
    {
      //alert("No user found");
      this.openSnackBar("No User Found","Close");
      console.log(error);
    })
}

onSubmit(form:NgForm)
{

  if(this.credentials.confirm_password===this.credentials.new_password)
  {
      this.user.password=form.value.new_password;
    
    this.service.updatePassword(this.user,this.credentials.loginId).subscribe(
      data=>
      {
      console.log("data=",data);
      this.openSnackBar("Password Updated","Close");
     // alert("updated");
      this.router.navigate(['']);
      },
      error=>
      {
        this.openSnackBar("Password not updated","Close");
        //alert("Not updated");
        console.log(error);
      })
    
}else
{
  this.openSnackBar("Not Same","Close");
 // alert("Not equal");
       
}


}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}
}
