
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

private  _getAllCustomers = "http://localhost:8081/api/v1.0/admin/moviebooking/getAllUsers"
private  _deleteCustomer = "http://localhost:8081/api/v1.0/admin/moviebooking/deleteUserById"


/*
private  _getAllCustomers = "https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/admin_user"
private  _deleteCustomer = "https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/admin_user"
*/
constructor(private http:HttpClient) { }


getAllCustomers():Observable<Array<User>>
  {
  
    return this.http.get<Array<User>>(this._getAllCustomers);

  }


  deleteCustomer(loginId:string):Observable<string>
  {
    return this.http.delete<string>(`${this._deleteCustomer}/${loginId}`);

  }



}
