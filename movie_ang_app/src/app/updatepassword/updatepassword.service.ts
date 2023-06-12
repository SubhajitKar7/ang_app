import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UpdatePasswordService {

  
private _updatePassword="http://localhost:8081/api/v1.0/moviebooking/forgot/updatepassword"
private _getUser="http://localhost:8081/api/v1.0/moviebooking/forgot/getUser"

/*
private _updatePassword="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/forgotupdate"
private _getUser="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/forgotuser"
*/

  constructor(private http:HttpClient,private router:Router) { }

updatePassword(user:User,loginId:string):Observable<string>
{
    console.log(user);
  return this.http.put<string>(`${this._updatePassword}/${loginId}`,user);
}

getUser(loginId:string):Observable<User>
{
  return this.http.get<User>(`${this._getUser}/${loginId}`);

}
  
}
