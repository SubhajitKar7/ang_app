import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';




@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  private _registerCustomer="http://localhost:8081/call/consumer/register"
private _loginAdmin="http://localhost:8081/call/admin/register"
/*
private _registerCustomer="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/register"
private _loginAdmin="http://localhost:8081/call/admin/register"
*/
  //url="http://localhost:8400/auth/authenticate";

  constructor(private http:HttpClient,private router:Router) { }

register(user:User)
{
    console.log(user);
  return this.http.post(this._registerCustomer,user);
}

  
}
