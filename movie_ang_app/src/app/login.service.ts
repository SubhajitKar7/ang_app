import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginCustomer="http://localhost:8081/call/consumer/login"
private _loginAdmin="http://localhost:8081/call/admin/login"
private _getUserById="http://localhost:8081/api/v1.0/moviebooking/forgot/getUser"

  //url="http://localhost:8400/auth/authenticate";

/*
  private _loginCustomer="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/login"
private _loginAdmin="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/admin_login"
private _getUserById="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/forgotuser"
*/
  constructor(private http:HttpClient,private router:Router) { }

generateToken(user:User,role:string)
{
  console.log("***");
  console.log(user);
  console.log(role);

  localStorage.setItem("user",user.loginId);
    
  if(role=="admin")
  {
    localStorage.setItem("role","admin");
    
  return this.http.post(this._loginAdmin,user);
  }else
  {
    localStorage.setItem("role","customer");
  return this.http.post(this._loginCustomer,user);
  }
  
}
getUserById(loginId:string):Observable<User>
{
  return this.http.get<User>(`${this._getUserById}/${loginId}`);

}


  loginUser(token:any)
  {
    localStorage.setItem("token",token);
    return true;
  }

  isLoggedIn()
  {
    console.log("islogged in called");
    let token=localStorage.getItem("token");
   // console.log(token);
    if(token==undefined || token==null || token=='')
    return false;
    else
    return true;
  }

  logout(){
    this.router.navigate(['']);
    localStorage.removeItem('token');
    return true;
  }

  getToken()
  {
    return localStorage.getItem("token");
  }
}
