
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket/ticket';
import { TicketDto } from '../ticket-dto/ticket-dto';
import { Movie } from '../movie/movie';



@Injectable({
  providedIn: 'root'
})
export class UpdateMovieService {


  
private  _getByMovieId="http://localhost:8081/api/v1.0/user/moviebooking/movies/search/moviedByID"
private  _updateMovie="http://localhost:8081/api/v1.0/admin/moviebooking/updateMovie"

/*
private  _getByMovieId="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/mymovieresource"
private  _updateMovie="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/mymovieresource"
*/


constructor(private http:HttpClient) { }



  getMovieById(mid:number):Observable<Movie>
  {
    return this.http.get<Movie>(`${this._getByMovieId}/${mid}`);

  }


  updateMovie(movie:Movie):Observable<Movie>
  {
    return this.http.put<Movie>(`${this._updateMovie}`,movie);

  }



}
