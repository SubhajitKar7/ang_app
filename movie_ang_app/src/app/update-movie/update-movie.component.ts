import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../movie/movie';
import { MovieService } from '../movie/movie.service';
import { UpdateMovieService } from './update-movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent {

  constructor(private service:UpdateMovieService,private router:Router,private route:ActivatedRoute,private _snackBar:MatSnackBar)
  {
   this.FillUp();
  }



data:{}|any; movieObj :Movie = new Movie(); movieArr:Array<Movie>=[];
displayedColumns: string[] = ['movieId', 'movieName', 'theatreName','totalSeat','seatAvailable','seatBooked','status','action'];


FillUp()
{
  this.service.getMovieById(this.route.snapshot.params['mid']).subscribe(
    data=>{
      this.movieObj=data;
      //alert("fetched");
    },
    error=>
    {
      console.log(error);
    })
}

onSubmit()
{
  this.service.updateMovie(this.movieObj).subscribe(data=>
    {
      //alert("Movie updated");
      this.openSnackBar("Movie Updated","Close");
      this.router.navigate(['movie']);
    },
    error=>
    {
      this.openSnackBar("Movie not updated","Close");
      console.log(error);
    })
    
}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}
}
