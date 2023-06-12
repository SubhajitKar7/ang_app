import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ForgetService {
private _forgot="http://localhost:8081/api/v1.0/moviebooking/forgot"
private _updatePassword="http://localhost:8084/auth/v1.0/moviebooking/forgot/updatepassword"


//private _forgot="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/forgot";


constructor(private http:HttpClient) { }

checkForUser(loginId:string):Observable<User>
{
    
  return this.http.get<User>(`${this._forgot}/${loginId}`);
}

  
}
