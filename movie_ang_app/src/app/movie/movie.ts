import { Ticket } from "../ticket/ticket";



export class Movie 
{
    movieId  :number |any;
    movieName:string |any;
    seatAvailable   :number |any;
    seatBooked:number |any;
    totalSeat:number |any;
    status:string |any;
    theatreName:string |any;
    ticketList: Array<Ticket>=[];
}

