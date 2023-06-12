import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { Ticket } from '../ticket/ticket';




@Injectable({
  providedIn: 'root'
})
export class ShowTicketService {

  
  private _bookings="http://localhost:8081/api/v1.0/moviebooking/getBookingList"

  constructor(private http:HttpClient,private router:Router) { }

getBookingList()
{
    return this.http.get<Ticket>(`${this._bookings}/${localStorage.getItem("user")}`);
}

  
}
