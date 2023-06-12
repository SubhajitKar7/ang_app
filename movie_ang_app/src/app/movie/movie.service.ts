
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket/ticket';
import { TicketDto } from '../ticket-dto/ticket-dto';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  
private  _getAllMovie = "http://localhost:8081/api/v1.0/user/moviebooking/all"
private  _bookTicket="http://localhost:8081/api/v1.0/user/moviebooking"
private  _getByMovieId="http://localhost:8081/api/v1.0/user/moviebooking/movies/search/moviedByID"
private  _updateMovie="http://localhost:8081/api/v1.0/admin/moviebooking/updateMovie"
private  _addMovie="http://localhost:8081/api/v1.0/admin/moviebooking/addMovie"
private  _deleteMovie="http://localhost:8081/api/v1.0/admin/moviebooking/delete/movieById"
/*
private  _getAllMovie = "https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/mymovieresource"
private  _bookTicket="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/booking"
private  _getByMovieId="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/mymovieresource"
private  _updateMovie="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/mymovieresource"
private  _addMovie="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/mymovieresource"
private  _deleteMovie="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/mymovieresource"
*/


constructor(private http:HttpClient) { }


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
    return this.http.post<Ticket>(`${this._bookTicket}/${movieName}`,ticketDto);
  }


}
