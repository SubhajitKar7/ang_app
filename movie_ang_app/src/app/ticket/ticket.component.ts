import { MatSnackBar } from '@angular/material/snack-bar';
import { TicketService } from './ticket.service';
import { Component } from '@angular/core';
import { Ticket } from './ticket';
import { TicketDto } from '../ticket-dto/ticket-dto';
import { MovieService } from '../movie/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent{

  constructor(private ticketService:TicketService,private movieService:MovieService,private router:Router,private route:ActivatedRoute,private _snackBar:MatSnackBar){
    this.ViewAllTickets();
  }
  

  RoleCheck()
  {
    console.log("roleCheck: "+localStorage.getItem("role"));
   return localStorage.getItem("role");
  }
  

  data:{}|any; booking:TicketDto = new TicketDto(); ticketList:Array<TicketDto>=[];
  displayedColumns: string[] = ['transactionId','availableSeat','bookedSeat','totalSeat','movieName','theatreName'];


  BookTicket(movieName:string)
{
  this.booking.userId=localStorage.getItem("user");

  this.ticketService.bookTicket(movieName,this.booking).subscribe(data=>
    {
      this.data = JSON.stringify(data);
      this.ticketList.push(this.data);
      this.openSnackBar("Ticket Booked","Close");
      //alert("Ticket booked");
    },
     error=>{
      this.openSnackBar("Unable to book ticket","Close");
      console.log(error);}
      )
}




public bookingList:[]|any=[];

ViewAllTickets(){
 this.movieService.getMovieById(this.route.snapshot.params['mid']).subscribe(data=>
    {
      let arr:[]|any=[];
      arr[0]=data;
      this.bookingList= arr[0].ticketList;
     console.log(this.bookingList);
   
    },
    error=>
    {
      console.log(error);
    })
}


openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}

}
