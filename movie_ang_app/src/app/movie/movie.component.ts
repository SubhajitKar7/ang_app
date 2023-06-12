import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MovieService } from './movie.service';
import { TicketDto } from '../ticket-dto/ticket-dto';
import { Movie } from './movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements AfterViewInit{
  @ViewChild('paginator') paginator: MatPaginator|any;
  @ViewChild('empTbSort') empTbSort = new MatSort();


  constructor(private movieService:MovieService,private router:Router,private route:ActivatedRoute,private _snackBar: MatSnackBar)
  {
   
  }


RoleCheck()
{
  console.log("roleCheck: "+localStorage.getItem("role"));
 return localStorage.getItem("role");
}

ToBooking()
{
  this.router.navigate(['ticket']);
}


data:{}|any; movieObj :Movie = new Movie(); movieArr:Array<Movie>=[];
displayedColumns: string[] = ['movieId', 'movieName', 'theatreName','totalSeat','seatAvailable','seatBooked','status','action'];
AddMovie()
{
  this.movieService.addMovie(this.movieObj).subscribe(data=>
    {
      this.data=JSON.stringify(data);
      this.movieArr.push(this.data);
     // alert("Movie is added");
     this.openSnackBar("Movie Added","Close");
     window.location.reload();
    },
    error=>
    {
      this.openSnackBar("Movie Not Added","Close");
      console.log(error);
    })
    
}

  /*
public dataSource:[]|any;
  ViewAllMovies(){
    this.movieService.getAllMovie().subscribe(data=>
      {
        this.movieArr=Object.values(data);
        this.dataSource = this.movieArr;
        //console.log(this.movieArr.length);
       //console.log(this.dataSource);
      },
      error=>
      {
        console.log(error);
      })
  }*/


  ViewAllMovies(){

  }

  public dataSource: MatTableDataSource<Movie>|any;
  ngAfterViewInit() {
    this.movieService.getAllMovie().subscribe(data=>
      {
        console.log(data);
        this.movieArr=Object.values(data);
        this.dataSource=new MatTableDataSource(this.movieArr);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.empTbSort;
      },
      error=>
      {
        console.log(error);
      })
   // console.log(this.movieArr.length);
   
  }
/*
  ngOnInit(): void {
    this.dataSource.filterPredicate = function (record:any,filter:any) {
      return record.movieName.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    }
}*/

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}



 public response:Movie|any;
  movie1:Movie =new Movie();
  public movieList:[]|any=[];

  public bookingList:[]|any=[];

ViewMovieById(){
   this.movieService.getMovieById(this.movie1.movieId).subscribe(data=>
      {
        //movie
        let arr:[]|any=[];
        arr[0]=data;
        this.movieList= arr;
       
     
      },
      error=>
      {
        console.log(error);
      })
}



UpdateMovie(mid:number)
{
  this.router.navigate(['updateMovie',mid]);
}


DeleteMovie(mid:number)
{
  this.movieService.deleteMovie(mid).subscribe(data=>
    {
      console.log("deleteeee");
      let movieIndex = this.movieArr.findIndex(m=>m.movieId ===mid);
      this.movieArr.splice(movieIndex,1);
      this.router.navigate(['/movie']);
      this.openSnackBar("Movie is deleted along with transaction data","Close");
      //alert("Movie is deleted along with transaction data");
      
    },
    error=>
    {
      this.openSnackBar("Movie not deleted ","Close");
      console.log(error);
    })
}



openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}



}
