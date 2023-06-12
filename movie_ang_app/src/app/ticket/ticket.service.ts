
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket/ticket';
import { TicketDto } from '../ticket-dto/ticket-dto';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

    constructor(private http:HttpClient) { }

private  _bookTicket="http://localhost:8081/api/v1.0/user/moviebooking/book"
//private  _bookTicket="https://457ert06q2.execute-api.us-west-2.amazonaws.com/movie_app/booking"


  bookTicket(movieName:string,ticketDto:TicketDto):Observable<Ticket>
  {
    return this.http.post<Ticket>(`${this._bookTicket}/${movieName}`,ticketDto);
  }


}
