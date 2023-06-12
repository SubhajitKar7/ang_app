
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ticket } from './ticket/ticket';
import { Movie } from './movie/movie';
import { TicketDto } from './ticket-dto/ticket-dto';
import { User } from './user/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isAuthenticated = false;

/*
private  _getAllMovie = "http://localhost:8081/api/v1.0/user/moviebooking/all"
private  _bookTicket="http://localhost:8081/api/v1.0/user/moviebooking"
private  _getByMovieId="http://localhost:8081/api/v1.0/user/moviebooking/movies/search/moviedByID"
private  _updateMovie="http://localhost:8081/api/v1.0/admin/moviebooking/updateMovie"
private  _addMovie="http://localhost:8081/api/v1.0/admin/moviebooking/addMovie"
private  _deleteMovie="http://localhost:8081/api/v1.0/admin/moviebooking/delete/movieById"

private _register="http://localhost:8084/auth/v1.0/moviebooking/register"
private _getAllUsers="http://localhost:8084/api/v1.0/getAllUsers"
private _getUserById="http://localhost:8081/api/v1.0/moviebooking/forgot/getUser"

//private _forget="http://localhost:8084/auth/v1.0/moviebooking"
//private _updatePassword="http://localhost:8084/auth/v1.0/moviebooking/forgot"

private _loginCustomer="http://localhost:8084/auth/v1.0/moviebooking/login"
private _loginAdmin="http://localhost:8084/auth/v1.0/getUserById/{loginId}"*/

private  _getAllMovie = "http://localhost:8081/api/v1.0/user/moviebooking/all"
private  _bookTicket="http://localhost:8081/api/v1.0/user/moviebooking"
private  _getByMovieId="http://localhost:8081/api/v1.0/user/moviebooking/movies/search/moviedByID"
private  _updateMovie="http://localhost:8081/api/v1.0/admin/moviebooking/updateMovie"
private  _addMovie="http://localhost:8081/api/v1.0/admin/moviebooking/addMovie"
private  _deleteMovie="http://localhost:8081/api/v1.0/admin/moviebooking/delete/movieById"

private _register="http://localhost:8084/auth/v1.0/moviebooking/register"
private _getAllUsers="http://localhost:8084/api/v1.0/getAllUsers"
private _getUserById="http://localhost:8081/api/v1.0/moviebooking/forgot/getUser"

private _loginCustomer="http://localhost:8084/auth/v1.0/moviebooking/login"
private _loginAdmin="http://localhost:8084/auth/v1.0/getUserById/{loginId}"



constructor(private http:HttpClient,private router:Router) { }

/*getIncome() {
  console.log(this.loginService.getToken());
  return this.http.get<any>(this._getIncome, {headers: new HttpHeaders({Authorization: "Bearer " + localStorage.getItem("token")})});
}*/


getAllMovie():Observable<Array<Movie>>
  {
  
    return this.http.get<Array<Movie>>(this._getAllMovie);

  }


  getMovieById(mid:number):Observable<Movie>
  {
    return this.http.get<Movie>(`${this._getByMovieId}/${mid}`);

  }

  addMovie(movie:Movie):Observable<Movie>
  {
    return this.http.post<Movie>(`${this._addMovie}`,movie);

  }

  updateMovie(movie:Movie):Observable<Movie>
  {
    return this.http.put<Movie>(`${this._updateMovie}`,movie);

  }


 
  deleteMovie(mid:number):Observable<string>
  {
    return this.http.delete<string>(`${this._deleteMovie}/${mid}`);

  }

  bookTicket(movieName:string,ticketDto:TicketDto):Observable<Ticket>
  {
    return this.http.post<Ticket>(`${this._bookTicket}/${movieName}/book`,ticketDto);
  }

  register(user:User):Observable<User>
  {
    return this.http.post<User>(`${this._register}`,user);
  }

  getAllUsers():Observable<Array<User>>
  {
    return this.http.get<Array<User>>(this._getAllUsers);
  }

  getUserById(loginId:string):Observable<User>
  {
    return this.http.get<User>(`${this._getUserById}/${loginId}`);

  }
/*
forgetPassword(loginId:string):Observable<boolean>
{
  return this.http.get<boolean>(`${this._forget}/${loginId}/forgot`);
}


updatePassword(loginId:string,user:User):Observable<string>
{
 return this.http.put<string>(`${this._updatePassword}/${loginId}/updatepassword`,user);
}*/

loginCustomer(user:User):Observable<any>
{
    return this.http.post<User>(`${this._loginCustomer}`,user);
}

loginAdmin(user:User):Observable<any>
{
  return this.http.post<User>(`${this._loginAdmin}`,user);
}


  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token==null || token=='')
    return false;
    else
    return true;
  }

  onLogout() {
    console.log("loggded in ",this.isLoggedIn());
    if(this.isLoggedIn()===true)
    {
    console.log("loggded in ",this.isLoggedIn());
    localStorage.removeItem("token");
    this.router.navigate(['']);
  }
}


}
