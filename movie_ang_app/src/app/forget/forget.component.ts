import { NgForm } from '@angular/forms';
import { ForgetService } from './forget.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {


  constructor(private forgetService:ForgetService,private router:Router,private route:ActivatedRoute,private _snackBar:MatSnackBar){}
  
  credentials={
    loginId:'',
  }

  update:boolean|any=false;


  question_given:string|any;
  asnwer_given:string|any;
  answer_taken:string|any;
  

onSubmit(form:NgForm){
    this.forgetService.checkForUser(this.credentials.loginId).subscribe(
      data=>
    {
      this.question_given=data.question;
      this.asnwer_given=data.answer;
      this.update=true;

    console.log("data=",data);
    
    
    },
    error=>
    {
      this.openSnackBar("No user found","Close");
      //alert("No user found");
      console.log(error);
    })
    
}

Secret(form:NgForm){
  if(form.value.answer_taken===this.asnwer_given)
  {
    this.router.navigate(['/updatepassword',this.credentials.loginId]);
  }
  else
  this.openSnackBar("Answer mismatched","Close");
  //alert("answer mismacthed");
  
}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}
}
