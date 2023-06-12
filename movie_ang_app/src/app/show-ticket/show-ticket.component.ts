import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie/movie.service';
import { TicketDto } from '../ticket-dto/ticket-dto';
import { TicketService } from '../ticket/ticket.service';
import { ShowTicketService } from './show-ticket.service';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent {
  
  constructor(private service:ShowTicketService,private router:Router,private route:ActivatedRoute){
    this.ViewAllTickets();
  }
  


  data:{}|any; booking:TicketDto = new TicketDto(); ticketList:Array<TicketDto>=[];
  displayedColumns: string[] = ['bookedSeat','movieName','theatreName'];

  
public bookingList:[]|any=[];

ViewAllTickets(){
 this.service.getBookingList().subscribe(data=>
    {
      let arr:[]|any=[];
      arr=data;
      this.bookingList= arr
     console.log(this.bookingList);
   
    },
    error=>
    {
      console.log(error);
    })
}


}
